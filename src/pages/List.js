import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import Button from "../components/atoms/Button";
import PageHeader from "../components/molecules/PageHeader";
import EqpTableRow from "../components/molecules/EqpTableRow";
import {getEquipments} from "../api/equipments";
import Input from '../components/atoms/Input';
import eqpPropsObj from '../assets/data/eqpProps.json';
import Tab from '../components/molecules/tab';

const StyledWrapper = styled.div`
  padding: 50px 0;
  
  .search-input {
    width: 60%;
  }
`;

export default function List() {
  const [equipments, setEquipments] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [searchedEqps, setSearchedEqps] = useState([]);
  const [eqpTypes, setEqpTypes] = useState([]);
  const [selectedEqpType, setSelectedEqpType] = useState('');
  const history = useHistory();

  useEffect(() => {
    getEquipments().then(data => {
      setEquipments(data);
      setSearchedEqps(data);
      createEqpTypes(data);
    });
  }, []);

  useEffect(() => {
    setSearchedEqps(findSearchedEqp(searchWord));
  }, [equipments, selectedEqpType]);

  const createEqpTypes = (eqps) => {
    let typeSet = new Set();

    eqps.forEach(eqp => {
      if (!typeSet.has(eqp.type)) {
        typeSet.add(eqp.type);
      }
    });

    let typeArr = Array.from(typeSet);

    setEqpTypes(typeArr);
    typeArr.length > 0 && setSelectedEqpType(typeArr[0]);
  };

  const openEqpDetail = (eqp) => {
    history.push(`/detail/${eqp.id}`);
  };

  const onChangeSearch = (e) => {
    setSearchWord(e.target.value);
    setSearchedEqps(findSearchedEqp(e.target.value));
  };

  const findSearchedEqp = (_searchWord) => {
    const filteredEqpByType = equipments.filter(eqp => {
      return eqp.type === selectedEqpType;
    });

    if (_searchWord) {
      let eqpSet = new Set();
      filteredEqpByType.forEach(eqp => {
        Object.keys(eqpPropsObj).forEach(key => {
          if (typeof eqp[key] === 'string' && eqp[key].toLowerCase().includes(_searchWord.toLowerCase())) {
            if (!eqpSet.has(eqp)) {
              eqpSet.add(eqp);
            }
          }
        });
      });
      return Array.from(eqpSet);
    } else {
      return filteredEqpByType;
    }
  };

  return (
    <StyledWrapper>
      <PageHeader title='장비 목록'>
        <Input size='small' placeholder='Search' className='search-input' onChange={onChangeSearch}/>
        <Link to="/create">
          <Button size='small' color='blue' outline>+ Add</Button>
        </Link>
      </PageHeader>
      { eqpTypes.length > 0 && <Tab tabs={eqpTypes} selectedTab={selectedEqpType} setSelectedTab={setSelectedEqpType} /> }
      <EqpTableRow isLabel={true} equipments={equipments} setEquipments={setEquipments} />
      { searchedEqps.length > 0 &&
        searchedEqps.map(eqp => (
          <EqpTableRow key={eqp.id} eqp={eqp} openEqpDetail={openEqpDetail} />
        ))
      }
      { equipments.length === 0 && '장비 목록 없음' }
      { equipments.length !== 0 && searchedEqps.length === 0 && '검색 결과 없음' }
    </StyledWrapper>
  );
}
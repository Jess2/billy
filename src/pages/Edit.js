import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import {Link, useHistory} from "react-router-dom";
import {getEquipment, putEquipment} from "../api/equipments";

const StyledWrapper = styled.div`
  padding: 3vw 0;
`;

export default function Edit({ match }) {
  const [eqp, setEqp] = useState({
    type: '',
    purchaseDate: '',
    regCode: '',
    manufacturer: '',
    productName: '',
    modelName: '',
    productCode: '',
    specification: '',
    description: '',
    currentLocation: '',
    relBusiness: '',
    isBilly: '',
  });
  const history = useHistory();

  useEffect(() => {
    getEquipment(match.params.id).then(data => {
      setEqp(data);
    });
  }, [match]);

  function onChangeInput(e) {
    setEqp({...eqp, [e.target.name]: e.target.value})
  }

  function onClickSave() {
    putEquipment(match.params.id, eqp).then(data => {
      history.push('/list');
    });
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 수정'>
        <Link to="/list">
          <Button size='small' color='gray' outline>Cancel</Button>
        </Link>
        <Button size='small' color='blue' outline onClick={onClickSave}>Save</Button>
      </PageHeader>
      <div>
        <input type='text' name='type' placeholder='분류' value={eqp.type} onChange={onChangeInput}/>
        <input type='text' name='purchaseDate' placeholder='구입년월' value={eqp.purchaseDate} onChange={onChangeInput}/>
        <input type='text' name='regCode' placeholder='관리번호' value={eqp.regCode} onChange={onChangeInput} />
        <input type='text' name='manufacturer' placeholder='제조사' value={eqp.manufacturer} onChange={onChangeInput} />
        <input type='text' name='productName' placeholder='제품명' value={eqp.productName} onChange={onChangeInput} />
        <input type='text' name='modelName' placeholder='모델명' value={eqp.modelName} onChange={onChangeInput} />
        <input type='text' name='productCode' placeholder='제품번호' value={eqp.productCode} onChange={onChangeInput} />
        <input type='text' name='specification' placeholder='규격/설명' value={eqp.specification} onChange={onChangeInput} />
        <input type='text' name='description' placeholder='추가정보' value={eqp.description} onChange={onChangeInput} />
        <input type='text' name='currentLocation' placeholder='물품위치' value={eqp.currentLocation} onChange={onChangeInput} />
        <input type='text' name='relBusiness' placeholder='관련사업' value={eqp.relBusiness} onChange={onChangeInput} />
        <input type='text' name='isBilly' placeholder='대여상태' value={eqp.isBilly} onChange={onChangeInput} />
      </div>
    </StyledWrapper>
  )
}

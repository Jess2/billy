import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import {Link, useHistory} from "react-router-dom";
import {getEquipment, putEquipment} from "../api/equipments";
import EqpInputForm from "../components/molecules/EqpInputForm";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function Edit({ match }) {
  const history = useHistory();
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

  useEffect(() => {
    console.log('id 변경')
    getEquipment(match.params.id).then(_eqp => {
      setEqp(_eqp);
    });
  }, [match.params.id]);

  function onChangeEqp(newEqp) {
    setEqp(newEqp);
  }

  function onClickSave() {
    putEquipment(match.params.id, eqp).then(_eqp => {
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
      <EqpInputForm eqp={eqp} onChangeEqp={onChangeEqp} />
    </StyledWrapper>
  )
}

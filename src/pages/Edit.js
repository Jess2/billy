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
    getEquipment(match.params.id).then(_eqp => {
      setEqp(_eqp);
    });
  }, [match.params.id]);

  const onChangeEqp = (newEqp) => {
    setEqp(newEqp);
  }

  const onClickSave = () => {
    putEquipment(match.params.id, eqp).then(_eqp => {
      history.push('/list');
    });
  }

  const onClickCancel = () => {
    history.goBack();
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 수정'>
        <Button size='small' color='gray' outline onClick={onClickCancel}>Cancel</Button>
        <Button size='small' color='blue' outline onClick={onClickSave}>Save</Button>
      </PageHeader>
      <EqpInputForm eqp={eqp} onChangeEqp={onChangeEqp} />
    </StyledWrapper>
  )
}

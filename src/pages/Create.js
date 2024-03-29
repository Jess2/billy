import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {EqpContext} from "../context/equipments";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import {Link, useHistory} from "react-router-dom";
import {postEquipment} from "../api/equipments";
import EqpInputForm from "../components/molecules/EqpInputForm";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function Create() {
  const history = useHistory();
  const equipments = useContext(EqpContext);
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
    billyUser: null,
  });

  const onChangeEqp = (newEqp) => {
    setEqp(newEqp);
  }

  const findNextId = () => {
    return equipments.length > 0 ? equipments[equipments.length - 1].id + 1 : 1;
  }

  const onClickSave = () => {
    eqp.id = findNextId();

    postEquipment(eqp).then(data => {
      history.push('/list');
    });
  }

  const onClickCancel = () => {
    history.goBack();
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 등록'>
        <Button size='small' color='gray' outline onClick={onClickCancel}>Cancel</Button>
        <Button size='small' color='blue' outline onClick={onClickSave}>Save</Button>
      </PageHeader>
      <EqpInputForm eqp={eqp} onChangeEqp={onChangeEqp} />
    </StyledWrapper>
  )
}

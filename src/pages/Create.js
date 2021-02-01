import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {EqpContext} from "../context/equipments";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import {Link, useHistory} from "react-router-dom";
import {postEquipment} from "../api/equipments";
import EqpInputForm from "../components/molecules/EqpInputForm";

const StyledWrapper = styled.div`
  padding: 3vw 0;
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
  });

  function onChangeEqp(newEqp) {
    setEqp(newEqp);
  }

  function findNextId() {
    return equipments.length > 0 ? equipments[equipments.length - 1].id + 1 : 1;
  }

  function onClickSave() {
    eqp.id = findNextId();

    postEquipment(eqp).then(data => {
      history.push('/list');
    });
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 등록'>
        <Link to="/list">
          <Button size='small' color='gray' outline>Cancel</Button>
        </Link>
        <Button size='small' color='blue' outline onClick={onClickSave}>Save</Button>
      </PageHeader>
      <EqpInputForm eqp={eqp} onChangeEqp={onChangeEqp} />
    </StyledWrapper>
  )
}

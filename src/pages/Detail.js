import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import ListRow from "../components/molecules/ListRow";
import {getEquipment, deleteEquipment} from "../api/equipments";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function Detail({ match }) {
  const [eqp, setEqp] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getEquipment(match.params.id).then(data => {
      setEqp(data);
    });
  }, [match]);

  const onClickEdit = (eqpId) => {
    history.push(`/edit/${eqp.id}`);
  }

  const onClickDelete = (eqpId) => {
    deleteEquipment(eqpId).then(data => {
      history.push(`/list`);
    });
  };

  return (
    <StyledWrapper>
      <PageHeader title='장비 상세'>
        <Button size='small' color='blue' outline onClick={() => onClickEdit(eqp.id)}>Edit</Button>
        <Button size='small' color='red' outline onClick={() => onClickDelete(eqp.id)}>Delete</Button>
      </PageHeader>
      <ListRow eqp={eqp} />
    </StyledWrapper>
  );
}
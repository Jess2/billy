import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import ListRow from "../components/molecules/ListRow";
import {getEquipment, deleteEquipment} from "../api/equipments";
import Dialog from "../components/organisms/Dialog";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function Detail({ match }) {
  const history = useHistory();
  const [eqp, setEqp] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [selectedEqpId, setSelectedEqpId] = useState(null);

  const onClickDelete = (eqpId) => {
    setSelectedEqpId(eqpId);
    setDialog(true);
  };

  const onConfirmDelete = () => {
    deleteEquipment(selectedEqpId).then(data => {
      setDialog(false);
      history.push(`/list`);
    });
  };

  const onCancelDelete = () => {
    setDialog(false);
  };

  useEffect(() => {
    getEquipment(match.params.id).then(data => {
      setEqp(data);
    });
  }, [match]);

  useEffect(() => {
    return () => setDialog(false); // cleanup function을 이용
  }, []);

  const onClickEdit = (eqpId) => {
    history.push(`/edit/${eqp.id}`);
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 상세'>
        <Button size='small' color='blue' outline onClick={() => onClickEdit(eqp.id)}>Edit</Button>
        <Button size='small' color='red' outline onClick={() => onClickDelete(eqp.id)}>Delete</Button>
      </PageHeader>
      <ListRow eqp={eqp} />
      <Dialog
        title="장비 삭제"
        contents="정말로 삭제하시겠습니까?"
        onConfirm={onConfirmDelete}
        onCancel={onCancelDelete}
        isVisible={dialog}
      >
      </Dialog>
    </StyledWrapper>
  );
}
import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import EqpListRow from "../components/molecules/EqpListRow";
import {getEquipment, deleteEquipment, putEquipment} from "../api/equipments";
import Modal from "../components/organisms/Modal";
import {MyInfoContext} from "../context/myInfo";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function Detail({ match }) {
  const history = useHistory();
  const [eqp, setEqp] = useState(null);
  const [borrowModal, setBorrowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedEqpId, setSelectedEqpId] = useState(null);
  const myInfo = useContext(MyInfoContext);

  const onClickEdit = () => {
    history.push(`/edit/${eqp.id}`);
  }

  const onClickDelete = () => {
    setSelectedEqpId(eqp.id);
    setDeleteModal(true);
  };

  const onConfirmDelete = () => {
    deleteEquipment(selectedEqpId).then(data => {
      setDeleteModal(false);
      history.push(`/list`);
    });
  };

  const onCancelDelete = () => {
    setDeleteModal(false);
  };

  const onClickBorrow = () => {
    setBorrowModal(true);
  }

  const onConfirmBorrow = () => {
    const newEqp = {
      ...eqp,
      isBilly: !eqp.isBilly,
      billyDate: eqp.isBilly ? null : new Date().toString(),
      billyUser: eqp.isBilly ? null : myInfo
    };

    putEquipment(eqp.id, newEqp).then(data => {
      setEqp(data);
      setBorrowModal(false);
    });
  }

  const onCancelBorrow = () => {
    setBorrowModal(false);
  }

  useEffect(() => {
    getEquipment(match.params.id).then(data => {
      setEqp(data);
    });
  }, [match]);

  useEffect(() => {
    return () => setDeleteModal(false); // cleanup function을 이용
  }, []);

  return (
    <>
      { eqp &&
        <StyledWrapper>
          <PageHeader title='장비 상세'>
            {
              !eqp.isBilly &&
              <Button size='small' color='blue' outline onClick={onClickBorrow}>
                Borrow
              </Button>
            }
            {
              eqp.isBilly && eqp.billyUser.id === myInfo.id &&
              <Button size='small' color='blue' outline onClick={onClickBorrow}>
                Return
              </Button>
            }
            <Button size='small' color='blue' outline onClick={onClickEdit}>Edit</Button>
            <Button size='small' color='red' outline onClick={onClickDelete}>Delete</Button>
          </PageHeader>
          <EqpListRow eqp={eqp} />

          <Modal
            title="장비 삭제"
            contents="정말로 삭제하시겠습니까?"
            onConfirm={onConfirmDelete}
            onCancel={onCancelDelete}
            isVisible={deleteModal}
          />
          <Modal
            title={ eqp.isBilly ? '장비 반납' : '장비 대여'}
            contents={ eqp.isBilly ? '해당 장비를 반납하시겠습니까?' : '해당 장비를 대여하시겠습니까?'}
            onConfirm={onConfirmBorrow}
            onCancel={onCancelBorrow}
            isVisible={borrowModal}
          />
        </StyledWrapper>
      }
    </>
  );
}
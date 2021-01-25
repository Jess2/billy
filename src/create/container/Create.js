import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {EqpContext, SetEqpContext} from "../../common/context/equipments";
import PageHeader from "../../common/component/PageHeader";
import Button from "../../common/component/Button";
import {Link, useHistory} from "react-router-dom";
import {getEquipments, postEquipment} from "../../common/api/equipments";

const StyledWrapper = styled.div`
  padding: 3vw 0;
`;

export default function Create() {
  const setEquipments = useContext(SetEqpContext);
  const equipments = useContext(EqpContext);
  const [newEqp, setNewEqp] = useState({});
  const history = useHistory();

  function onChangeInput(e) {
    setNewEqp({...newEqp, [e.target.name]: e.target.value})
  }

  function findNextId() {
    return equipments.length > 0 ? equipments[equipments.length - 1].id + 1 : 1;
  }

  function onClickSave() {
    newEqp.id = findNextId();
    postEquipment(newEqp).then(data => {
      setEquipments([...equipments, newEqp]);
    });
    history.push('/list');
  }

  return (
    <StyledWrapper>
      <PageHeader title='장비 등록'>
        <Link to="/list">
          <Button size='small' color='gray' outline>Cancel</Button>
        </Link>
        <Button size='small' color='blue' outline onClick={onClickSave}>Save</Button>
      </PageHeader>
      <div>
        <input type='text' name='type' placeholder='분류' onChange={onChangeInput}/>
        <input type='text' name='purchaseDate' placeholder='구입년월' onChange={onChangeInput}/>
        <input type='text' name='regCode' placeholder='관리번호' onChange={onChangeInput} />
        <input type='text' name='manufacturer' placeholder='제조사' onChange={onChangeInput} />
        <input type='text' name='productName' placeholder='제품명' onChange={onChangeInput} />
        <input type='text' name='modelName' placeholder='모델명' onChange={onChangeInput} />
        <input type='text' name='productCode' placeholder='제품번호' onChange={onChangeInput} />
        <input type='text' name='specification' placeholder='규격/설명' onChange={onChangeInput} />
        <input type='text' name='description' placeholder='추가정보' onChange={onChangeInput} />
        <input type='text' name='currentLocation' placeholder='물품위치' onChange={onChangeInput} />
        <input type='text' name='relBusiness' placeholder='관련사업' onChange={onChangeInput} />
        <input type='text' name='isBilly' placeholder='대여상태' onChange={onChangeInput} />
      </div>
    </StyledWrapper>
  )
}

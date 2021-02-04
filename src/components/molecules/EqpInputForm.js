import React from 'react';
import Input from '../atoms/Input';

export default function EqpInputForm({ eqp, onChangeEqp }) {
  const onChangeInput = (e) => {
    onChangeEqp({...eqp, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <Input type='text' name='type' placeholder='분류 ' value={eqp.type} onChange={onChangeInput}/>
      <Input type='text' name='purchaseDate' placeholder='구입년월' value={eqp.purchaseDate} onChange={onChangeInput}/>
      <Input type='text' name='regCode' placeholder='관리번호' value={eqp.regCode} onChange={onChangeInput} />
      <Input type='text' name='manufacturer' placeholder='제조사' value={eqp.manufacturer} onChange={onChangeInput} />
      <Input type='text' name='productName' placeholder='제품명' value={eqp.productName} onChange={onChangeInput} />
      <Input type='text' name='modelName' placeholder='모델명' value={eqp.modelName} onChange={onChangeInput} />
      <Input type='text' name='productCode' placeholder='제품번호' value={eqp.productCode} onChange={onChangeInput} />
      <Input type='text' name='specification' placeholder='규격/설명' value={eqp.specification} onChange={onChangeInput} />
      <Input type='text' name='description' placeholder='추가정보' value={eqp.description} onChange={onChangeInput} />
      <Input type='text' name='currentLocation' placeholder='물품위치' value={eqp.currentLocation} onChange={onChangeInput} />
      <Input type='text' name='relBusiness' placeholder='관련사업' value={eqp.relBusiness} onChange={onChangeInput} />
      <Input type='text' name='isBilly' placeholder='대여상태' value={eqp.isBilly} onChange={onChangeInput} />
    </div>
  );
}

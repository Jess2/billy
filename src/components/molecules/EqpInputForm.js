import React from 'react';

export default function EqpInputForm({ eqp, onChangeEqp }) {
  function onChangeInput(e) {
    onChangeEqp({...eqp, [e.target.name]: e.target.value})
  }

  return (
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
  )
}

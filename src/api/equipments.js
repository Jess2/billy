export function getEquipments() {
  return new Promise(result => {
    setTimeout(() => {
      result(JSON.parse(localStorage.getItem('equipments')) || []);
    }, 0);
  });
}

export function postEquipment(eqp) {
  return new Promise(result => {
    setTimeout(() => {
      let equipments = JSON.parse(localStorage.getItem('equipments')) || [];
      equipments = JSON.stringify([...equipments, eqp]);
      localStorage.setItem('equipments', equipments);
      result(eqp);
    }, 0);
  });
}

// [
//   {
//     id: 1,
//     type: 'Smart Phone',
//     purchaseDate: '2017-04-01', //구입년월
//     createDT: '2018-03-27',
//     UpdateDT: '2020-12-07',
//     productCode: 'F4HSW3AGHG7K', // 제품번호
//     productName: 'iPhone 7', // 제품명
//     modelName: 'A1905', // 모델명
//     manufacturer: 'APPLE', // 제조사
//     regCode: 'MPH-1712-022(T)', // 관리 번호
//     specification: '블랙,128GB,KT', // 규격/설명
//     description: '', // 추가 정보
//     relBusiness: '', // 관련 사업
//     isBilly: true, // 대여 상태
//     currentLocation: '', // 물품 위치
//     billyUser: {
//       id: '117',
//       name: 'jessie',
//       role: "u",
//       email: 'test@g.com',
//       createDT: "2020-02-26",
//       updateDT: "2021-01-04",
//     },
//   }
// ]
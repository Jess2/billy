export function getEquipments() {
  return new Promise(result => {
    setTimeout(() => {
      const equipments = localStorage.getItem('equipments');
      !equipments && localStorage.setItem('equipments', JSON.stringify(sampleEquipments));
      result(JSON.parse(localStorage.getItem('equipments')) || []);
    }, 0);
  });
}

export function postEquipment(eqp) {
  return new Promise(result => {
    setTimeout(() => {
      let equipments = JSON.parse(localStorage.getItem('equipments')) || [];
      equipments = [...equipments, eqp];
      localStorage.setItem('equipments', JSON.stringify(equipments));
      result(eqp);
    }, 0);
  });
}

export function getEquipment(id) {
  return new Promise(result => {
    setTimeout(() => {
      const equipments = JSON.parse(localStorage.getItem('equipments'));
      const selectedEqps = equipments.filter(eqp => {
        return eqp.id === Number(id);
      });
      result(selectedEqps[0]);
    });
  });
}

export function putEquipment(id, newEqp) {
  return new Promise(result => {
    setTimeout(() => {
      let equipments = JSON.parse(localStorage.getItem('equipments'));
      equipments = equipments.map(eqp => {
        if (eqp.id === Number(id)) {
          return newEqp;
        }
        return eqp;
      });
      localStorage.setItem('equipments', JSON.stringify(equipments))
      result(newEqp);
    })
  });
}

export function deleteEquipment(id) {
  return new Promise(result => {
    setTimeout(() => {
      const equipments = JSON.parse(localStorage.getItem('equipments'));
      const newEquipments = equipments.filter(eqp => {
        return eqp.id !== Number(id);
      });
      localStorage.setItem('equipments', JSON.stringify(newEquipments));
      result(newEquipments);
    });
  });
}

const sampleEquipments = [
  {
    id: 1,
    type: 'Phone',
    purchaseDate: new Date('2017-04-01'), //구입년월
    createDate: new Date('2018-03-27'),
    updateDate: new Date('2020-12-07'),
    productCode: 'F4HSW3AGHG7K', // 제품번호
    productName: 'iPhone 7', // 제품명
    modelName: 'A1905', // 모델명
    manufacturer: 'APPLE', // 제조사
    regCode: 'MPH-1712-022(T)', // 관리 번호
    specification: '블랙,128GB,KT', // 규격/설명
    description: '', // 추가 정보
    relBusiness: '', // 관련 사업
    isBilly: true, // 대여 상태
    billyDate: new Date('2020-02-26'), // 대여일
    currentLocation: '', // 물품 위치
    billyUser: {
      id: '117',
      name: 'jessie',
      role: 'u',
      email: 'test@g.com',
      createDate: new Date('2020-02-26'),
      updateDate: new Date('2021-01-04'),
    },
  },
  {
    id: 2,
    type: 'Laptop',
    purchaseDate: new Date('2019-12-13'), //구입년월
    createDate: new Date('2019-12-13'),
    updateDate: new Date('2020-01-30'),
    productCode: 'SW3AGHG7KF4H', // 제품번호
    productName: 'Macbook Pro 13', // 제품명
    modelName: 'C1905', // 모델명
    manufacturer: 'APPLE', // 제조사
    regCode: 'EWD-D323-503', // 관리 번호
    specification: '스페이스그레이,512GB', // 규격/설명
    description: '', // 추가 정보
    relBusiness: '', // 관련 사업
    isBilly: false, // 대여 상태
    billyDate: null, // 대여일
    currentLocation: '', // 물품 위치
    billyUser: null,
  },
  {
    id: 3,
    type: 'Tablet',
    purchaseDate: new Date('2021-01-01'), //구입년월
    createDate: new Date('2021-01-22'),
    updateDate: new Date('2021-02-01'),
    productCode: '3AGHGF4HSW7K', // 제품번호
    productName: 'Galaxy Tab', // 제품명
    modelName: 'B0001', // 모델명
    manufacturer: 'Samsung', // 제조사
    regCode: 'AAA-4323-011', // 관리 번호
    specification: '화이트,128GB,LGU+', // 규격/설명
    description: '', // 추가 정보
    relBusiness: '', // 관련 사업
    isBilly: false, // 대여 상태
    billyDate: null,
    currentLocation: '', // 물품 위치
    billyUser: null,
  }
]
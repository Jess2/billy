import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import Button from "../components/atoms/Button";
import PageHeader from "../components/molecules/PageHeader";
import TableRow from "../components/molecules/TableRow";
import {getEquipments} from "../api/equipments";

const StyledWrapper = styled.div`
  padding: 50px 0;
`;

export default function List() {
  const [equipments, setEquipments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getEquipments().then(data => {
      setEquipments(data);
    });
  }, []);

  const openEqpDetail = (eqp) => {
    history.push(`/detail/${eqp.id}`);
  };

  return (
    <StyledWrapper>
      <PageHeader title='장비 목록'>
        <Link to="/create">
          <Button size='small' color='blue' outline>+ Add</Button>
        </Link>
      </PageHeader>
      <TableRow isLabel={true} />
      { equipments &&
        equipments.map(eqp => (
          <TableRow key={eqp.id} eqp={eqp} openEqpDetail={openEqpDetail} />
        ))
      }
    </StyledWrapper>
  );
}
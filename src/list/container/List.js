import React from "react";
import { Link } from "react-router-dom";

export default function List() {
  const id = '12345';
  return <>
    <h1>List</h1>
    <Link to="/create">+ Add</Link>
    <br />
    <Link to={`/detail/${id}`}>Detail</Link>
  </>;
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <>
      <h1>Detail</h1>
      <Link to="/edit">Edit</Link>
    </>
  );
}
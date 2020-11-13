import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './Results.scss';
const Results = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL = `https://api.adviceslip.com/advice`;
    const res = await axios.get(API_URL);
    console.log(res.data);
    console.log(res.data.slip);
    setData(<Card key={res.data.slip.id} advice={res.data.slip.advice} />);
  };

  const onClick = () => {
    setData([]);
    fetchData();
  };

  return (
    <>
      <button onClick={onClick}>Get a new quote</button>
      <div className="container">{data ? data : null}</div>
    </>
  );
};
export default Results;

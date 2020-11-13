import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h2>Quote: {props.advice}</h2>
      </div>
    </>
  );
};
export default Card;

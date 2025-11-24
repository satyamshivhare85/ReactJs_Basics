import React from "react";

const Card = (props) => { // props me sare arguments aa gye name age and img
    //and one most imp thing props that we got is object 
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>
        {props.user},{props.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;

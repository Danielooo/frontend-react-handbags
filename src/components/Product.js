import React from "react";

function Product(props) {
  return (
    <article>
      <span>{props.type}</span>
      <img src={props.link}/>
      <p>{props.name}</p>
      <h4>{props.price}</h4>
    </article>
  );

}

export default Product

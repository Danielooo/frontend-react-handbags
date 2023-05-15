import React from "react";

function Button(props) {
  return (
    <button disabled={props.disabled} onClick={() => { console.log(props.text)}}>{props.text}
    </button>
  )
}

export default Button;

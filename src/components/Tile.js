import React from "react";

function Tile({link, title, children}) {

  if (link) {
    return (
      <section>
        <img src={link}/>
      </section>
    )
  } else {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }
}

export default Tile;

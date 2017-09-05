import React from 'react';

function Button(props) {
  return(
    <div className="Button">
      <button className="teamA" onClick={props.teamA}>+</button>
      <button className="teamB" onClick={props.teamB}>–</button>
      <button className="unassigned" onClick={props.unasigned}>+</button>
    </div>
  );
}

export default Button;

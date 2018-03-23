import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const NumbersList = props => (
   <div>
   {props.list.map(number => <div key={number} className={`highlight-${number === props.x}`}> {number} </div> )}
   </div>
 );

ReactDOM.render( <NumbersList list={[5, 42, 12]} x={42} />, document.getElementById("react") );

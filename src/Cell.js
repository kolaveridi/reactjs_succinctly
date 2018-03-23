import React from 'react';
import ReactDOM from 'react-dom';
class Cell extends React.Component{

  active(){
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  }
  render(){
    console.log('this.activeCells is '+this.props.activeCells);
    console.log(this.props.gameState);
    let className="cell";
    if(this.props.gameState==="memorize" && this.active()){
      className+=" active";
    }

    return(
      <div className={className}>
      </div>
    );
   }
}
export default Cell;

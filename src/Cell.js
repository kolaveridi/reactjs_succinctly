import React from 'react';
import ReactDOM from 'react-dom';
class Cell extends React.Component{

  active(){
    var activeCells=this.props.activeCells;
    var flag=false;
    if(activeCells.indexof(this.props.id)>=0)
    flag=true;
    return flag;
  }
  render(){
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

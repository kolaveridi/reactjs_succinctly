import React from 'react';
import Cell from './Cell.js';
import Row from './Row.js';
import Footer from './Footer.js';
import _ from "lodash";
class Game extends React.Component{

constructor(props) {
   super(props);
   this.matrix=[];
   for(let r=0;r<this.props.rows;r++){
     let row=[];
     for(let c=0;c<this.props.columns;c++){
       row.push(`${r}${c}`);
     }
     this.matrix.push(row);
   }
   let flatMatrix = _.flatten(this.matrix);
   this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);

   this.state = {
     gameState: 'ready',
     wrongGuesses:[],
     correctGuesses:[]
    };
  }
  recordGuess({cellId,userGuessIsCorrect}){
      let {wrongGuesses,correctGuesses}=this.state;
      if(userGuessIsCorrect){
        correctGuesses.push(cellId);
      }
      else{
        wrongGuesses.push(cellId);
      }
      this.setState({
        correctGuesses,
        wrongGuesses
      });
  }


  componentDidMount(){
    setTimeout(() => { this.setState({ gameState: 'memorize' }, () => {
      setTimeout(() => this.setState({ gameState: 'recall' }), 2000);
     });
   }, 2000);
  }
  render(){
    console.log('Game state has changed');


     return(
       <div className="grid">

       {
         this.matrix.map((row, index) => (

          <Row key={index}>
          {row.map(cellId => <Cell recordGuess={this.recordGuess.bind(this)} key={cellId} id={cellId} activeCells={this.activeCells} {...this.state} />)}
          </Row>
          ))
       }
        <Footer {...this.state} />
       </div>

     );
}
}
export default Game;

import React from 'react';
class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
          <div className="hint">
           {this.props.hints[this.props.gameState]}...
          </div>
      </div>

    );
  }
}
Footer.defaultProps={
  hints:{
    ready:"Get Ready",
    memorize:"memorize",
    recall:"recall"
  }
}
export default Footer;

import React, { Component } from "react";
import { render } from "react-dom";


class DreamListItem extends Component {

  render(){
    return(
      <div 
      onClick={this.props.pickDream} 
      number={this.props.number}
      id = {this.props.number}
      >
        <h3>{this.props.number}. {this.props.dream}</h3>
        <hr/>
      </div>
    );
  }

}

export default DreamListItem;

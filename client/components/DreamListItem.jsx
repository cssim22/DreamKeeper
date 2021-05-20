import React, { Component } from "react";
import { render } from "react-dom";


class DreamListItem extends Component {

  render(){
    console.log('this.props in dreamlistitem',this.props)
    return(
      <div>
        <h3>{this.props.number}. {this.props.dream}</h3>
      </div>
    );
  }

}

export default DreamListItem;

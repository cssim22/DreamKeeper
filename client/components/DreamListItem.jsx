import React, { Component } from "react";
import { render } from "react-dom";


class DreamListItem extends Component {

  render(){
    return(
      <div>
        <h3>{this.props.number}. {this.props.dream}</h3>
      </div>
    );
  }

}

export default DreamListItem;

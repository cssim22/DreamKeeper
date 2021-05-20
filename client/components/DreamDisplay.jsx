import React, { Component } from "react";
import { render } from "react-dom";


class DreamDisplay extends Component {   
  render(){
    return(
    <div className="dreamDisplay">
      <h1>{this.props.dreams.title}</h1>
      <br/>
      <h3>{this.props.dreams.detail}</h3>
      <br/>
      <h3>{this.props.dreams.label}</h3>
    </div>
    )
  }
}


export default DreamDisplay;

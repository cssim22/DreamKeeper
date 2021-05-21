import React, { Component } from "react";
import { render } from "react-dom";


class DreamDisplay extends Component {   
  render(){
    // console.log('this is props in dreamdisplay',this.props)
    if(!this.props.dreams){
      return(
        <div className="dreamDisplay">
          <h1>No titles found</h1>
          <br/>
          <h3>No details found</h3>
          <br/>
          <h3>No labels found</h3>
        </div>
        )
    }

    // console.log('this is props in dreamdisplay after if statement',this.props)
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

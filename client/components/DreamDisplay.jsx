import React, { Component } from "react";
import { render } from "react-dom";


class DreamDisplay extends Component {   
  render(){
    return(
    <div className="dreamDisplay">
      oh my goodness {this.props.name};
    </div>
    )
  }
}


export default DreamDisplay;

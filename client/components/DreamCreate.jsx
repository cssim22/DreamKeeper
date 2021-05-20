import React, { Component } from "react";
import { render } from "react-dom";

class DreamCreate extends Component {
  
  render(){
    // console.log('dreamSubmit in dreamcreate',this.props.dreamSubmit)
    return(
      <div>
        <form onSubmit ={this.props.dreamSubmit}>
          <label>Dream Title:</label>
          <input name = "title" />
          <br/>
          <label>Dream Description:</label>
          <br/>
          <textarea name="details" rows="20" cols="50" />
          <br/>
         <input type="submit" value='Submit'></input>
       </form>
      </div>
    )
  }
}


export default DreamCreate;

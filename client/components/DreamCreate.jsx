import React, { Component } from "react";
import { render } from "react-dom";

class DreamCreate extends Component {
  render(){
    return(
      <div>
        <form onSubmit ={this.newDream}>
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

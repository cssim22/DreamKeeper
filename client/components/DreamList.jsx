import React, { Component } from "react";
import { render } from "react-dom";
import DreamListItem from './DreamListItem.jsx'

class DreamList extends Component {


  render(){

    const dreamsList = [];

    for(let i = 0; i < 3; i++ ){
      dreamsList.push(<DreamListItem key={i} number={i+1} dream={this.props.dreams[i].title}></DreamListItem>)
    }
   
    return(
      <div>
        {dreamsList}
      </div>
    );
  }

}

export default DreamList;
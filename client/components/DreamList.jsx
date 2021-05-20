import React, { Component } from "react";
import { render } from "react-dom";
import DreamListItem from './DreamListItem.jsx'

class DreamList extends Component {


  render(){

    const dreamsList = [];

    console.log('this is props is dreamlist',this.props);
    for(let i = 0; i < 3; i++ ){
      dreamsList.push(<DreamListItem key={i} number={i+1} dream={this.props.dreams[i].title}></DreamListItem>)
    }
    console.log('this is dreamsList', dreamsList)
    return(
      <div>
        {dreamsList}
      </div>
    );
  }

}

export default DreamList;
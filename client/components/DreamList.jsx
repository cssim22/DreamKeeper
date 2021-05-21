import React, { Component } from "react";
import { render } from "react-dom";
import DreamListItem from './DreamListItem.jsx'

class DreamList extends Component {


  render(){
    // console.log('this is props in dreamlist',this.props)
    
    const dreamsList = [];

    for(let i = 0; i < this.props.dreams.length; i++ ){
      dreamsList.push(
      <DreamListItem 
      key={i} 
      number={i+1} 
      id={i}
      pickDream={this.props.pickDream}  
      dream={this.props.dreams[i].title}>
      </DreamListItem>)
    }
   
    return(
      <div>
        {dreamsList}
      </div>
    );
  }

}

export default DreamList;
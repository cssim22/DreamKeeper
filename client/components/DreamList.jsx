import React, { Component } from "react";
import { render } from "react-dom";
//import DreamListItem from './DreamListItem'

class DreamList extends React.Component {



  // componentDidMount(){
  //   fetch('/api/')
  //     .then(res => res.json())
  //     .then(dreams =>{

  //     })
  // }

  render(){


    return(
      <h1>{this.props.name}kjhk</h1>
      // <DreamListItem
      //   key = {i}
      //   info = {dream}
      // />
    );
  }

}

// const DreamList = props => {
//   <div className="dreamList">
//     dreamList
//   </div>
// }
export default DreamList;
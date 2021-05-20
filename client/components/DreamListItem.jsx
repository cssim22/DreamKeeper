import React, { Component } from "react";
import { render } from "react-dom";


class DreamListItem extends React.Component {

  componentDidMount(){
    // fetch('/api/')
    //   .then(res => res.json())
    //   .then(dreams =>{

    //   })
  }

  render(){


    return(
      <DreamListItem
        key = {i}
        info = {dream}
      />
    );
  }

}

// const DreamList = props => {
//   <div className="dreamList">
//     dreamList
//   </div>
// }
export default DreamListItem;

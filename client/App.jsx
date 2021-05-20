import React, { Component } from "react";
import { render } from "react-dom";

import DreamList from './components/DreamList.jsx';
import DreamCreate from './components/DreamCreate.jsx';
import DreamDisplay from './components/DreamDisplay.jsx';

import "./styles.scss";


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      fetchedDreams: false,
      dreams: []
    }
    this.newDream = this.newDream.bind(this);
  }
  
  componentDidMount(){
    // //method to fetch th edreams from teh database and put in state
    // fetch('/api/')
    // .then(res => {
    //  console.log('response from api fetch', res);
    //  res.json()
    // })
    // .then((dreams) => {
    //  if (!Array.isArray(dreams)) dreams = [];
    //  return this.setState({
    //    dreams,
    //    fetchedDreams: true
    //  });
    // })
    // .catch(err => console.log('App.componentDidMount fetch dreams: ERROR: ', err));
  }
  

  newDream(e){
    console.log(e);
    fetch('/api/')
    .then(res => {
     console.log('response from api fetch', res);
     res.json()
    })
    .then((dreams) => {
     if (!Array.isArray(dreams)) dreams = [];
     return this.setState({
       dreams,
       fetchedDreams: true
     });
    })
    .catch(err => console.log('App.componentDidMount fetch dreams: ERROR: ', err));
  }

  render() {
    
    // if (!this.state.fetchedDreams) return (
    //   <div>
    //     <h1>Loading dreams... </h1>
    //   </div>
    // );

    // const { dreams } = this.state;
    
    // if (!dreams) return null;

    // if (!dreams.length) return (
    //   <div>Sorry, no dreams found</div>
    // );

    return (
      <div id="app">
        <header>
          <div id="logo">
            <h1>DreamKeeper</h1>
          </div>
          <h1>ABC</h1>
        </header>

        <main>
          <div id="dreamList" class ="column">
            <DreamList name = "DreamList"></DreamList> 
          </div>

          <div id="dreamDisplay" class = 'column'>
            <DreamCreate newDream={this.newDream} name = "DreamCreate"></DreamCreate>
            <br/>
            <DreamDisplay name = "DreamDisplay"></DreamDisplay> 
          </div>
        </main>
      </div>
    );
  }
}

export default App;


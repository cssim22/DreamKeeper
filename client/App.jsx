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
      dreams: [
        {title:'Chased By Dog', detail: 'A big dog chased me.', label: 'nightmare'},
        {title:'Chased By Giraffe', detail: 'A big giraffe chased me.', label: 'sexy'},
        {title:'Able To Fly', detail: 'I flew to Mars and rode on a rover', label: 'fun'}
      ]
    }
    this.newDream = this.newDream.bind(this);
  }
  
  componentDidMount(){
    //method to fetch th edreams from teh database and put in state
    fetch('/api/')
    .then(res => res.json())
    .then((dreams) => {
     if (!Array.isArray(dreams)) dreams = [];
     return this.setState({
       dreams,
       fetchedDreams: true
     });
    })
    .catch(err => console.log('App.componentDidMount fetch dreams: ERROR: ', err));
  }
  

  newDream(e){
    console.log(e);
    fetch('/dream',{
      method:'POST',
      headers: {
        'Content-Type': "Application/JSON"
      },
      body: JSON.stringify(body)
    })
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
        </header>

        <main>
          <div id="dreamList">
            <DreamList dreams = {this.state.dreams} name = "DreamList"></DreamList> 
          </div>

          <div id="dreamDisplay">
            <DreamCreate newDream={this.newDream} name = "DreamCreate"></DreamCreate>
            <br/>
            <DreamDisplay dreams = {this.state.dreams[0]} name = "DreamDisplay"></DreamDisplay> 
          </div>
        </main>
      </div>
    );
  }
}

export default App;


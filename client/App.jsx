import React, { Component } from "react";
// import { render } from "react-dom";
// import PropTypes from 'prop-types';

import DreamList from './components/DreamList.jsx';
import DreamCreate from './components/DreamCreate.jsx';
import DreamDisplay from './components/DreamDisplay.jsx';

import "./styles.scss";


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      fetchedDreams: false,
      dreams: [],
      chosen: 7
    }

    this.submitDream = this.submitDream.bind(this);
    this.pickDream = this.pickDream.bind(this);
  }
  
  componentDidMount(){
    //method to fetch the dreams from teh database and put in state
    fetch('/api')
    .then(res => res.json())
    .then(dreams => {
      console.log('dreams in componentdidmount',dreams)
      if (!Array.isArray(dreams)) dreams = [];  
      this.setState({
          dreams,
          fetchedDreams: true
     })
    })
    .catch(err => console.log('App.componentDidMount fetch dreams: ERROR: ', err))
  }
  

  submitDream(event){
    event.preventDefault();
    
    const body = {
      title: event.target[0].value,
      detail: event.target[1].value,
      label: event.target[2].value
    };
    console.log(body)
    fetch('/api/dream',{
      method:'POST',
      headers: {
        'Content-Type': "Application/JSON"
      },
      body: JSON.stringify(body)
    })
    .then(res => {
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
  //event.target.__reactProps$oz90u59y2b.children
  pickDream(event){
    event.preventDefault();
    console.log('this is the event in the pickDream event',event.target.firstChild.textContent)
    return this.setState({
      chosen: Number(event.target.firstChild.textContent)-1
    })

  }

  render() {
    if (!this.state.fetchedDreams) return (
      <div>
        <h1>Loading dreams... </h1>
      </div>
    );

    const { dreams } = this.state;
    
    if (!dreams) return null;

    if (!dreams.length) return (
      <div>Sorry, no dreams found</div>
    );
   
    const {chosen} = this.state;

    return (
      <div id="app">
        <header>
          <div id="logo">
            <h1>DreamKeeper</h1>
          </div>
        </header>

        <main>
          <div id="dreamList">
            <DreamList dreams = {this.state.dreams} pickDream = {this.pickDream} name = "DreamList"></DreamList> 
          </div>

          <div id="dreamDisplay">
            <DreamCreate onSubmit={this.submitDream} name = "DreamCreate"></DreamCreate>
            <br/>
            <DreamDisplay dreams = {this.state.dreams[chosen]} name = "DreamDisplay"></DreamDisplay> 
          </div>
        </main>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Rebase from 're-base';
import Footer from './components/Footer';
import './App.css';

let base = Rebase.createClass({
  apiKey: "AIzaSyADDtHRdt0CYOy3uTQCBpJZ2iRfMQo_S1U",
  authDomain: "unibras-website.firebaseapp.com",
  databaseURL: "https://unibras-website.firebaseio.com",
  storageBucket: "unibras-website.appspot.com"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteMap: []
    }
  }
  componentDidMount() {
    this.ref = base.bindToState('site-map', {
      context: this,
      asArray: true,
      state: 'siteMap'
    })
  }

  render() {
    const { siteMap } = this.state;
    if (!siteMap.length) return null;
    return (
      <Router hashType="hashbang">
        <div className="App">
        </div>
      </Router>
    );
  }
}

export default App

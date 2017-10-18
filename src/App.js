import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Rebase from 're-base';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';
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
          <Header siteMap={siteMap} />
          <Route
              path="/:page?/:subpage?"
              render={({match}) => (
                <Page siteMap={siteMap} pathname={match.params.page} subpathname={match.params.subpage} className="App__Body"/>
              )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';
import firebase from 'firebase'
import './App.css';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteMap: []
    }
  }

  componentDidMount() {
    const siteMapRef = firebase.database().ref().child('site-map');
    siteMapRef.on('value', snap => {
      this.setState({ siteMap: snap.val() });
    });
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

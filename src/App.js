import React, { Component } from 'react';
import { ImageSlider } from './components/ImageSlider';
import { NavigationMenu } from './components/NavigationMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src: '/images/image1.jpg',
          alt: '1'
        },
        {
          src: '/images/image2.jpg',
          alt: '2'
        },
        {
          src: '/images/image3.jpg',
          alt: '3'
        },
        {
          src: '/images/image4.jpg',
          alt: '4'
        },
        {
          src: '/images/image5.jpg',
          alt: '5'
        },
        {
          src: '/images/image6.jpg',
          alt: '6'
        },
        {
          src: '/images/image7.jpg',
          alt: '7'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src="images/logo.png" className="App-logo" alt="logo" />
          <NavigationMenu />
        </div>

        <div className="App-body">
          <ImageSlider images={this.state.images} />
        </div>

        <div className="App-footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;

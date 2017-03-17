import React, { Component } from 'react';
import { ImageSlider } from './components/ImageSlider';
import { NavigationMenu } from './components/NavigationMenu';
import logo from './images/logo.png';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';
import img5 from './images/image5.jpg';
import img6 from './images/image6.jpg';
import img7 from './images/image7.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7
      ]
    }
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

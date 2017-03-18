import React, { Component } from 'react';
import './styles.css';
import ImageSlider from '../../components/ImageSlider';
import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.jpg';
import img4 from '../../images/image4.jpg';
import img5 from '../../images/image5.jpg';
import img6 from '../../images/image6.jpg';
import img7 from '../../images/image7.jpg';
import classnames from 'classnames';

class HomePage extends Component {
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
    };
  }

  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "HomePage")}>
        <ImageSlider images={this.state.images} />
      </div>
    );
  }
}

export default HomePage;

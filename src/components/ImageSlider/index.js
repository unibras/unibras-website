import React, { Component } from 'react';
import './styles.css';
import ImageGallery from '../ImageGallery';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    this.onIndexChange = this.onIndexChange.bind(this);
  }

  isActive(index) {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      return true;
    }
  }

  onIndexChange(currentIndex) {
    this.setState({currentIndex});
  }

  render() {
    const { images } = this.props;
    return (
      <div className="ImageSlider">
        <div className="ImageSlider__Wrapper">
          <ImageGallery images={images} onIndexChange={this.onIndexChange}/>
        </div>
        <div className="ImageSlider__Pager">
          { images.map((image, index) => {
            const pageClasses = `ImageSlider__Page ${this.isActive(index) ? 'ImageSlider__Page--active' : ''}`;
            return <div key={index} className={pageClasses}></div>
          })}
        </div>
      </div>
    );
  }
};

ImageSlider.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default ImageSlider;

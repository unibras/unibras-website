import React, { Component } from 'react';
import './styles.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }

    this.advance = this.advance.bind(this);
  }

  componentWillMount() {
    this.cancelInterval = setInterval(() => {
        this.advance();
      },
      5000
    )
  }

  componentWillUnmount() {
    this.cancelInterval();
  }

  advance() {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const newIndex = (currentIndex >= images.length - 1) ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    })
  }

  isActive(index) {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      return true;
    }
  }

  transitionClass(index) {
    const { currentIndex } = this.state;
    const { images } = this.props;

    if (index === currentIndex - 1) {
      return 'ImageSlider__Image--transition';
    }
    if (currentIndex === 0 && index === images.length - 1) {
      return 'ImageSlider__Image--transition';
    }
    return '';
  }

  render() {
    return (
      <div className="ImageSlider">
        <div className="ImageSlider__Wrapper">
          { this.props.images.map((image, index) => {
            const slideClasses = `ImageSlider__Image ${this.isActive(index) ? 'ImageSlider__Image--active' : ''} ${this.transitionClass(index)}`;
            return <img src={image.src} alt={image.alt} key={index} className={slideClasses} />
          })}
        </div>
        <div className="ImageSlider__Pager">
          { this.props.images.map((image, index) => {
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

export { ImageSlider };

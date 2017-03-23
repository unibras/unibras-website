import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }

    this.advance = this.advance.bind(this);
  }

  componentWillMount() {
    this._interval = setInterval(() => this.advance(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  advance() {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const newIndex = (currentIndex >= images.length - 1) ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    });
    this.props.onIndexChange && this.props.onIndexChange(newIndex);
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
      return 'ImageGallery__Image--transition';
    }
    if (currentIndex === 0 && index === images.length - 1) {
      return 'ImageGallery__Image--transition';
    }
    return '';
  }

  render() {
    const { images } = this.props;
    return (
      <div className={classnames(this.props.className, "ImageGallery")}>
        <div className="ImageGallery__Wrapper">
          { images.map((image, index) => {
            const slideClasses = `ImageGallery__Image ${this.isActive(index) ? 'ImageGallery__Image--active' : ''} ${this.transitionClass(index)}`;
            return <img src={image.url} alt={image.description} key={index} className={slideClasses} />
          })}
        </div>
      </div>
    );
  }
};

ImageGallery.propTypes = {
  images: React.PropTypes.array.isRequired,
  onIndexChange: React.PropTypes.func
};

export default ImageGallery;

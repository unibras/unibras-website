import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import firebase from 'firebase';
import './styles.css';

export class ImageDetail extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null
    }
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.which === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    const storage = firebase.storage();
    const { image } = this.props;
    storage.ref(image.path)
      .getDownloadURL()
      .then(imageUrl => this.setState({ imageUrl }));
    this.overlay.focus();
  }

  render() {
    const { imageUrl } = this.state;
    const { image, onClose } = this.props;
    if (!image) return null;

    return (
      <div id="imageDetail"
        className={classnames(this.props.className, 'ImageDetail')}
        tabIndex="0"
        onClick={onClose}
        onKeyDown={this.onKeyDown}
        ref={(el) => { this.overlay = el; }}>
        { imageUrl &&
          <div className="ImageDetail_Frame">
            <img src={imageUrl} alt={image.description} className="ImageDetail_Image" />
            <p className="ImageDetail_Description">{image.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default ImageDetail;

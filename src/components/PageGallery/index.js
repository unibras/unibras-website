import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import ImageDetail from '../../components/ImageDetail';

class PageGallery extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: null
    };

    this.onThumbClick = this.onThumbClick.bind(this);
    this.onImageDetailClose = this.onImageDetailClose.bind(this);
  }

  onImageDetailClose() {
    this.setState({selectedImage: null});
  }

  onThumbClick(image) {
    this.setState({selectedImage: image});
  }

  getThumbPath(path) {
    let pathParts = path.split('.jpg');
    return pathParts.join('_thumb.jpg');
  }

  componentDidMount() {
    const storage = firebase.storage();
    const { page } = this.props;

    let promises = page.gallery.map((image) => {
      return ((image) => {
        return storage.ref(`${page.id}/${this.getThumbPath(image.path)}`)
          .getDownloadURL()
          .then(thumbUrl => {
            return { path: `${page.id}/${image.path}`, thumbUrl: thumbUrl, description: image.description };
          });

      })(image);
    });

    Promise.all(promises).then(results => {
      this.setState({images: results});
    })
  }

  render() {
    const { images, selectedImage } = this.state;
    return (
      <div className={classnames(this.props.className, "PageGallery")}>
        { images.map((image, index) =>
          <div className="PageGallery__Image"
            style={{backgroundImage: `url(${image.thumbUrl})`}}
            role="img"
            aria-label={image.description}
            title={image.description}
            key={index}
            onClick={this.onThumbClick.bind(this, image)} /> )
        }
        { selectedImage && <ImageDetail image={selectedImage} onClose={this.onImageDetailClose.bind(this)} /> }
      </div>
    );
  }
}

export default PageGallery

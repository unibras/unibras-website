import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class GalleryPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "GalleryPage")}>

      </div>
    );
  }
}

export default GalleryPage;

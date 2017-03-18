import React, { Component } from 'react'
import './styles.css';
import classnames from 'classnames';

class VideosPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "VideosPage")}>

      </div>
    );
  }
}

export default VideosPage;

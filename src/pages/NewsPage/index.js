import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class NewsPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "NewsPage")}>

      </div>
    );
  }
}

export default NewsPage;

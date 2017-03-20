import React, { Component } from 'react';
import './styles.css';
import ImageSlider from '../../components/ImageSlider';
import classnames from 'classnames';

function findCurrentPage(path, pages) {
  return pages.find(page => (page.id === path || (page.position === 1 && !path)));
}

class Page extends Component {
  render() {
    const { pathname, subpathname, siteMap } = this.props;
    const page = findCurrentPage(pathname, siteMap);
    return (
      <div className={classnames(this.props.className, "App__Body", "Page")}>
        {page.slider && <ImageSlider images={page.slider} />}
      </div>
    );
  }
}

Page.propTypes = {
  siteMap: React.PropTypes.array.isRequired
};

export default Page;

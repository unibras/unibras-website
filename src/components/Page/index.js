import React, { Component } from 'react';
import './styles.css';
import ImageSlider from '../../components/ImageSlider';
import PageBody from '../../components/PageBody';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function findCurrentPage(path, pages) {
  return pages.find(page => (page.id === path || (page.position === 1 && !path)));
}
function findCurrentSubPage(subpath, page) {
  if (!page || !subpath) return;

  return page.subsections.find(page => (page.id === subpath));
}

class Page extends Component {
  static propTypes = {
    siteMap: PropTypes.array.isRequired
  }

  render() {
    const { pathname, subpathname, siteMap } = this.props;
    const page = findCurrentPage(pathname, siteMap);
    const subpage = findCurrentSubPage(subpathname, page);
    return (
      <div className={classnames(this.props.className, 'Page')}>
        {page.slider && <ImageSlider images={page.slider} />}
        {page.body && <PageBody page={subpage || page} />}
      </div>
    );
  }
}

export default Page;

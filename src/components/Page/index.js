import React, { Component } from 'react';
import './styles.css';
import ImageSlider from '../../components/ImageSlider';
import PageBody from '../../components/PageBody';
import classnames from 'classnames';

function findCurrentPage(path, pages) {
  return pages.find(page => (page.id === path || (page.position === 1 && !path)));
}
function findCurrentSubPage(subpath, page) {
  if (!page || !subpath) return;

  return page.subsections.find(page => (page.id === subpath));
}

class Page extends Component {
  render() {
    const { pathname, subpathname, siteMap } = this.props;
    const page = findCurrentPage(pathname, siteMap);
    const subpage = findCurrentSubPage(subpathname, page);
    return (
      <div className={classnames(this.props.className, "App__Body", "Page")}>
        {page.slider && <ImageSlider images={page.slider} />}
        {page.body && <PageBody page={subpage || page} />}
      </div>
    );
  }
}

Page.propTypes = {
  siteMap: React.PropTypes.array.isRequired
};

export default Page;

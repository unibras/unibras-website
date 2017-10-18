import React, { Component } from 'react';
import './styles.css';
import ImageGallery from '../../components/ImageGallery';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Page extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className={classnames(this.props.className, "PageBody")}>
        <div className="PageBody__Description">
          <h1 className="PageBody__Title">{page.title}</h1> <span dangerouslySetInnerHTML={{__html: page.body}}></span>
        </div>
        {page.images && <ImageGallery className="PageBody__Gallery" images={page.images} />}
      </div>
    );
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;

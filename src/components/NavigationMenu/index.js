import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './styles.css';
import PropTypes from 'prop-types';

function sortPages(a, b) {
  return a.position - b.position;
}

function findCurrentPage(path, pages) {
  const pathParts = path.split('/');
  return pages.find(currentPage => (currentPage.id === pathParts[1] ||
    (currentPage.position === 1 && path === '/')));
}

class NavigationMenu extends React.Component {
  render() {
    const { siteMap } = this.props;
    const {
      router: {
        route: {
          location: {
            pathname
          }
        }
      }
    } = this.context;
    const pages = siteMap.sort(sortPages);
    const currentPage = findCurrentPage(pathname, pages);

    return (
      <nav className={classnames(this.props.className, 'NavigationMenu')}>
        <div className="NavigationMenu__Main">
          { pages.map((page) => {
            const to = `/${page.position === 1 ? '' : page.id}`;
            const isExact = page.position === 1 ? true : false;
            return (
              <NavLink
                key={to}
                exact={isExact}
                activeClassName="NavigationMenu__Link--active"
                className="NavigationMenu__Link"
                to={to}>{page.title}</NavLink>
            );
          })}
        </div>
        <div className={classnames('NavigationMenu__Secondary', {['NavigationMenu__Secondary--open']: currentPage.subsections})}>
          { currentPage && currentPage.subsections && currentPage.subsections.sort(sortPages).map((subpage) => {
            const to = `/${currentPage.id}/${subpage.id}`;
            return (
              <NavLink
                key={to}
                exact
                activeClassName="NavigationMenu__Link--active"
                className="NavigationMenu__Link NavigationMenu__Link--Secondary"
                to={to}>{subpage.title}</NavLink>
            );
          })}
        </div>
      </nav>
    );
  }
}

NavigationMenu.contextTypes = {
  router: PropTypes.object.isRequired
};

NavigationMenu.propTypes = {
  siteMap: PropTypes.array.isRequired
};

export default NavigationMenu;

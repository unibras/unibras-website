import React from 'react';
import classnames from 'classnames';
import NavigationMenu from '../../components/NavigationMenu';
import logo from '../../images/logo.svg';
import './styles.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className={classnames(props.className, 'Header')}>
      <img src={logo} className="Headder__Logo" alt="Unibras logo" />
      <NavigationMenu siteMap={props.siteMap} />
    </div>
  );
};

Header.propTypes = {
  siteMap: PropTypes.array.isRequired
};

export default Header;

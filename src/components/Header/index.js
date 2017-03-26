import React from 'react';
import classnames from 'classnames';
import NavigationMenu from '../../components/NavigationMenu';
import logo from '../../images/logo.svg';
import './styles.css';

const Header = (props) => {
  return (
    <div className={classnames(props.className, "Header")}>
      <img src={logo} className="Headder__Logo" alt="Unibras logo" />
      <NavigationMenu siteMap={props.siteMap} />
    </div>
  );
}

Header.propTypes = {
  siteMap: React.PropTypes.array.isRequired
};

export default Header;

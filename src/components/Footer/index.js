import React from 'react';
import classnames from 'classnames';
import './styles.css';

const Footer = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const revision = '0.3';

  return (
    <div className={classnames(props.className, 'Footer')}>
      <span role="img" aria-label="copyright">©</span> Copyright {year} UNIBRAS, All Rights Reserved. <span className="Footer__revision">Revisión {revision}</span> <a href="http://www.unibras.com.ar" target="_blank" rel="noopener noreferrer">www.unibras.com.ar</a>
    </div>
  );
};

export default Footer;

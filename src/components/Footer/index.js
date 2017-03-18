import React from 'react';
import classnames from 'classnames';
import './styles.css';

const Footer = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const revision = '0.2';

  return (
    <div className={classnames(props.className, "Footer")}>
      © Copyright {year} UNIBRAS, All Rights Reserved. <span className="Footer__revision">Revisión {revision}</span> <a href="http://www.unibras.com.ar" target="_blank">www.unibras.com.ar</a>
    </div>
  );
}

export default Footer;

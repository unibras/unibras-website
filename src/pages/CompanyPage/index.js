import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class CompanyPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "CompanyPage")}>

      </div>
    );
  }
}

export default CompanyPage;

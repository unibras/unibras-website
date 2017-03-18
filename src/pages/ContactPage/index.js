import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class ContactPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "ContactPage")}>

      </div>
    );
  }
}

export default ContactPage;

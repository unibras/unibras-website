import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';

class ProductsPage extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, "App-body", "ProductsPage")}>

      </div>
    );
  }
}

export default ProductsPage;

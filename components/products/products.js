import React from 'react';
import ProductsList from '../../fragments/WUList/wUlist';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  data = [{}, {}, {}, {}];

  render() {
    return <ProductsList products={data} />;
  }
}

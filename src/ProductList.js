import React, { Component } from "react";
import { Table } from "reactstrap";

export class ProductList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.info.currentCategoryName}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((element) => (
              <tr key={element.id}>
                <th scope="row">{element.id}</th>
                <td>{element.productName}</td>
                <td>{element.quantityPerUnit}</td>
                <td>{element.unitPrice}</td>
                <td>{element.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

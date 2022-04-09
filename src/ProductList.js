import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export class ProductList extends Component {
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
              <th>Category ID</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.categoryId}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    color="info"
                    onClick={() => this.props.addToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

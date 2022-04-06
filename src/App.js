import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import { Navi } from "./Navi";
import { ProductList } from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };
  setCategory = (category) => {
    this.setState({
      currentCategoryName: category.categoryName,
      currentCategoryId: category.id,
    });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    fetch("http://localhost:3000/products?categoryId=" + categoryId)
      .then((result) => result.json())
      .then((result) => this.setState({ products: result }));
  };

  render() {
    let productInfo = {
      title: "Product List",
      currentCategoryName: this.state.currentCategoryName,
      currentCategoryId: this.state.currentCategoryId,
    };
    let categoryInfo = {
      title: "Category List",
      currentCategoryName: this.state.currentCategoryName,
      currentCategoryId: this.state.currentCategoryId,
    };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                setCategory={this.setCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

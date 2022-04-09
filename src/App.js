import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import { Navi } from "./Navi";
import { ProductList } from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  setCategory = (category) => {
    this.setState({
      currentCategoryName: category.categoryName,
      currentCategoryId: category.id,
    });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    let checkProduct = newCart.find((x) => x.product.id === product.id);
    if (checkProduct) {
      newCart[newCart.indexOf(checkProduct)].quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
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
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                setCategory={this.setCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                info={productInfo}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

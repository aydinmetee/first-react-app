import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
    currentCategoryName: "",
    currentCategoryId: 0,
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((result) => result.json())
      .then((result) => this.setState({ categories: result }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((element) => (
            <ListGroupItem
              active={element.id === this.props.info.currentCategoryId}
              onClick={() => this.props.setCategory(element)}
              key={element.id}
            >
              {element.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.info.currentCategoryName}</h4>
      </div>
    );
  }
}

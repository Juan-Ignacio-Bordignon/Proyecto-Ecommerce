import React, { Component } from "react";
import { Link } from "react-router-dom";
const productURL = "/api/product";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.products) {
      return <div>Cargando...</div>;
    }
    return (
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>A la venta</th>
            <th>Tipo</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.deleted === 0 ? "si" : "no"}</td>
                <td>{product.type.name}</td>
                <td><Link to={`/edit/${product.id}`}>Editar producto: {product.id}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  componentDidMount() {
    this.fetchProducts();
  }
  async fetchProducts() {
    const result = await fetch(productURL);
    const response = await result.json();
    const products = response.products;

    this.setState({ products: products });
  }
}

export default ProductTable;

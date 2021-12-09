import React, { Component } from "react";
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>A la venta</th>
            <th>Tipo</th>
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

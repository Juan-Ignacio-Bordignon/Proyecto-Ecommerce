import React, { Component } from "react";
import ContentCard from "../contentCard";
import { Link } from "react-router-dom";

const productsURL = "/api/product";

class LastProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.state.lastProduct) {
      return <div>Cargando...</div>;
    }
    return (
      <ContentCard title="Ultimo producto en la Base de Datos">
        <div className="text-center">
          <h2>{this.state.lastProduct.title}</h2>
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{ width: "40rem" }}
            src={`http://localhost:3000/${this.state.lastProduct.img}`}
            alt="Star Wars - Mandalorian"
          />
        </div>
        <h2>{this.state.lastProduct.price}</h2>
        <p>{this.state.lastProduct.description}</p>
        <Link className="btn btn-danger" to="/pages">
          View product detail
        </Link>
      </ContentCard>
    );
  }

  componentDidMount() {
    console.log("el componente se monto");
    this.fetchLastProduct();
  }
  async fetchLastProduct() {
    const result = await fetch(productsURL);
    const response = await result.json();
    const product = response.products;
    console.log(product)
    const lastProductId = product.length-1;
    const lastProduct = product[lastProductId];
    console.log(lastProduct)

    this.setState({ lastProduct: lastProduct });
  }
}
export default LastProductDetail;

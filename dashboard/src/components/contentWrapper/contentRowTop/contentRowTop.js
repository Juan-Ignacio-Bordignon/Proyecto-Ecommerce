import ValueCard from "./valueCard/valueCard";
import React, { Component } from "react";

const productsURL = "/api/product"
const userURL = "/api/users"
const typesURL = "/api/product"

class ContentRowTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if(!this.state.product && !this.state.user && !this.state.types){
      return <div>Cargando...</div>;
    }
    return (
      <div className="row">
        <ValueCard
          title="Productos en la Base de Datos"
          icon="fa-shopping-cart"
          color="primary"
          value={this.state.product}
        />
        <ValueCard
          title="Categotias en la Base de Datos"
          icon="fa-file"
          color="success"
          value={this.state.types}
        />
        <ValueCard
          title="Usuarios en la Base de Datos"
          icon="fa-user"
          color="warning"
          value={this.state.user}
        />
      </div>
    );
  }
  componentDidMount() {
    console.log("el componente se monto");
    this.fetchProducts();
    this.fetchUsers();
    this.fetchTypes();
  }
  async fetchProducts(){
    const result = await fetch(productsURL);
    const response = await result.json();
    const product = response.count;

    this.setState({ product: product });
  }
  async fetchUsers(){
    const result = await fetch(userURL);
    const response = await result.json();
    const user = response.count;

    this.setState({ user: user });
  }
  async fetchTypes() {
    const result = await fetch(typesURL);
    const response = await result.json();
    const types = response.countByCategory.length;

    this.setState({ types: types });
  }
}

export default ContentRowTop;

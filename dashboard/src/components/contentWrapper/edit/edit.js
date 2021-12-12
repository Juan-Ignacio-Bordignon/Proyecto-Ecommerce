import React, { Component } from "react";

const typeURL = "/api/product/type";
const productURL = `/api/product/`;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if ((!this.state.product)||(!this.state.types)) {
        return <div>Cargando...</div>;
    }
    return (
      <div className="card-body">
        <h2>Edición de producto</h2>
        <form
          action="/product/edit/"
          method="POST"
          className=""
          id="uploadForm"
          enctype="multipart/form-data"
          onSubmit={this.onSubmit}
        >
          <article className="">
            <img
              className=""
              src={`http://localhost:3001/${this.state.product.img}`}
              alt={this.state.product.title}
            />
            <div className="mb-3">
              <div>
                <label className="form-label">Nombre producto:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.product.title}
                />
              </div>
              <div>
                <label className="form-label">Precio del producto</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  id="price"
                  value={this.state.product.price}
                />
              </div>
              <div>
                <label className="form-label" for="img">
                  Imagen producto:
                </label>
                <input
                  class="form-control"
                  type="file"
                  name="img"
                  id="img"
                  accept=".jpg"
                />
              </div>
              <div>
                <label className="form-label">Tipo de producto:</label>
                <br></br>
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="type_id"
                  id="type_id"
                >
                  {this.state.types.map((type) => {
                    return <option selected={this.typeIdComparison(type.id)} value={type.id} >{type.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <label className="form-label">Visibilidad:</label>
                <br></br>
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="deleted"
                  id="deleted"
                >
                  <option value={0} selected={0 === this.state.product.deleted ? true : false}>Visible</option>
                  <option value={1} selected={1 === this.state.product.deleted ? true : false}>No visible</option>
                </select>
              </div>
              <div>
                <h2>Descripción</h2>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={this.state.product.description}
                ></textarea>
              </div>
              <br></br>
              <button type="submit" id="buttonSubmit" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </article>
        </form>
      </div>
    );
  }
  componentDidMount() {
    this.fetchProduct();
    this.fetchTypes();
    console.log(this.state.types);
  }
  async fetchTypes() {
    const result = await fetch(typeURL);
    const response = await result.json();
    const types = response.types;
    this.setState({ types: types });
    console.log(this.state.types);
  }
  async fetchProduct() {
    const { id } = this.props.match.params;
    const url = productURL + id;
    const result = await fetch(url);
    const response = await result.json();
    this.setState({ product: response });
    console.log(this.state.product);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log("Formulario enviado");
  }
  typeIdComparison(id) {
    return id === this.state.product.type_id;
  }
}

export default Edit;

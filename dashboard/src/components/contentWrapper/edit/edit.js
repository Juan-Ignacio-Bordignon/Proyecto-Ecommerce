import React, { Component, createRef } from "react";

const typeURL = "/api/product/type";
const productURL = `/api/product/`;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputTitle = createRef();
    this.inputPrice = createRef();
    this.inputImg = createRef();
    this.inputType = createRef();
    this.inputDeleted = createRef();
    this.inputDescription = createRef();
  }
  render() {
    if (!this.state.product || !this.state.types) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card-body">
        <h2>Edición de producto</h2>
        {this.state.errors ? this.error() : ""}
        <form className="" id="uploadForm" onSubmit={this.onSubmit}>
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
                  ref={this.inputTitle}
                  defaultValue={this.state.product.title}
                ></input>
              </div>
              <div>
                <label className="form-label">Precio del producto</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  defaultValue={this.state.product.price}
                  ref={this.inputPrice}
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
                  accept=".jpeg, .jpg, .png, .gif, .bmp"
                  ref={this.inputImg}
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
                  ref={this.inputType}
                >
                  {this.state.types.map((type) => {
                    return (
                      <option
                        selected={this.typeIdComparison(type.id)}
                        value={type.id}
                      >
                        {type.name}
                      </option>
                    );
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
                  ref={this.inputDeleted}
                >
                  <option
                    value={0}
                    selected={0 === this.state.product.deleted ? true : false}
                  >
                    Visible
                  </option>
                  <option
                    value={1}
                    selected={1 === this.state.product.deleted ? true : false}
                  >
                    No visible
                  </option>
                </select>
              </div>
              <div>
                <h2>Descripción</h2>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  ref={this.inputDescription}
                  defaultValue={this.state.product.description}
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
    if (!sessionStorage.getItem("loged")) {
      window.location.replace("/login");
    }
    this.fetchProduct();
    this.fetchTypes();
  }
  async fetchTypes() {
    const result = await fetch(typeURL);
    const response = await result.json();
    const types = response.types;
    this.setState({ types: types });
  }
  async fetchProduct() {
    const { id } = this.props.match.params;
    const url = productURL + id;
    const result = await fetch(url);
    const response = await result.json();
    this.setState({ product: response });
  }
  onSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const response = await fetch(`/api/product/edit/${this.state.product.id}`, {
      method: "POST",
      body: formdata,
    });
    const result = await response.json();
    console.log(result)
    if (result.errors) {
      this.setState({ errors: result.errors });
      return;
    }
    window.location.replace("/tables");
  };
  typeIdComparison(id) {
    return id === this.state.product.type_id;
  }
  error() {
    return (
      <div className="alert alert-danger" role="alert">
        <ul>
          {this.state.errors.map((error) => {
            return <li>{error.msg}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Edit;

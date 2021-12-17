import React, { Component, createRef } from "react";

const typeURL = "/api/product/type";

class Create extends Component {
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
    if (!this.state.types) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card-body">
        <h2>Creación de producto</h2>
        {this.state.errors ? this.error() : ""}
        <form className="" id="uploadForm" onSubmit={this.onSubmit}>
          <article className="">
            <div className="mb-3">
              <div>
                <label className="form-label">Nombre producto:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  ref={this.inputTitle}
                ></input>
              </div>
              <div>
                <label className="form-label">Precio del producto</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  ref={this.inputPrice}
                />
              </div>
              <div>
                <label className="form-label" for="img">
                  Imagen producto:
                </label>
                <input
                  class="form-control-file"
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
                    return <option value={type.id}>{type.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <h2>Descripción</h2>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  ref={this.inputDescription}
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
    this.fetchTypes();
  }
  async fetchTypes() {
    const result = await fetch(typeURL);
    const response = await result.json();
    const types = response.types;
    this.setState({ types: types });
  }
  onSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const response = await fetch(`/api/product/create`, {
      method: "POST",
      body: formdata,
    });
    const result = await response.json();
    console.log(result);
    if (result.errors) {
      this.setState({ errors: result.errors });
      return;
    }
    console.log(response);
    window.location.replace("/tables");
  };
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

export default Create;

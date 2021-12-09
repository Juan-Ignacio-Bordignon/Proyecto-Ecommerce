import React, { Component } from "react";
import ContentCard from "../contentCard";

const typesURL = "/api/product";

class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.state.types) {
      return <div>Cargando...</div>;
    }
    return (
      <ContentCard title="Categorias en la Base de Datos">
        <div className="row">
          {this.state.types.map((type) => {
            return (
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{type.id} - {type.count}</div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentCard>
    );
  }

  componentDidMount() {
    console.log("el componente se monto");
    this.fetchTypes();
  }
  async fetchTypes() {
    const result = await fetch(typesURL);
    const response = await result.json();
    const types = response.countByCategory;

    this.setState({ types: types });
  }
}

export default GenresInDb;

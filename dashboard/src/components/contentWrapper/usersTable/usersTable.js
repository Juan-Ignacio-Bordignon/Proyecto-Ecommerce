import React, { Component } from "react";
const userURL = "/api/users";

class Userstable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.users) {
      return <div>Cargando...</div>;
    }
    return (
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre Usuario</th>
            <th>Email</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>{user.admin === 1 ? "Admin" : "Comprador"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  componentDidMount() {
    this.fetchUsers();
  }
  async fetchUsers(){
    const result = await fetch(userURL);
    const response = await result.json();
    const users = response.users;
    console.log(users)

    this.setState({ users: users });
  }
}

export default Userstable;

import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const [errors, setErrors] = useState();
  if(sessionStorage.getItem("loged")){
      sessionStorage.removeItem("loged")
  }

  function onSubmit(event) {
    event.preventDefault();
    logUser();
  }
  async function logUser() {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result)
    if (result.msg) {
      setErrors(result.msg);
      return
    }
    sessionStorage.setItem("loged",JSON.stringify(result));
    window.location.replace("/")
  }
  function error() {
    return (
      <div className="alert alert-danger" role="alert">
        {errors}
      </div>
    );
  }
  return (
    <div className="card-body">
      <h2>Log in:</h2>
      {errors ? error() : ""}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Contraseña:
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Contraseña"
            ref={password}
          />
        </div>
        <div className="mb-3">
          <input type="checkbox" name="remember" value="remember" />
          <label>Recorda mi usuario</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;

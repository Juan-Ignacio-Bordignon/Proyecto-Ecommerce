import { Link } from "react-router-dom";

function link() {
  return (
    <Link className="nav-link dropdown-toggle" to={"/login"}>
      Log in
    </Link>
  );
}
function user() {
  return <div>{JSON.parse(sessionStorage.getItem("loged")).user_name}</div>;
}
function create() {
  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <span className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
        <Link className="nav-link dropdown-toggle" to={"/create"}>
          Crear producto
        </Link>
      </span>
    </li>
  );
}

export default function TopNavBar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">

      {sessionStorage.getItem("loged") ? create() : ""}

        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="messagesDropdown"
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">7</span>
          </a>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <div className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {sessionStorage.getItem("loged") ? user() : link()}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

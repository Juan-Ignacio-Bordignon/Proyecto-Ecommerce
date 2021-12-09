import "./assets/css/app.css";
import SideBar from "./components/sideBar/sideBar";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import TopNavBar from "./components/contentWrapper/topNavBar/topNavBar";
import Footer from "./components/contentWrapper/footer/footer";

import { Switch, Route } from "react-router-dom";
import ProductsTable from "./components/contentWrapper/productsTable/productsTable";
import GenresInDb from "./components/contentWrapper/contentCard/typesInDb/typesInDb";
import MovieDetail from "./components/contentWrapper/contentCard/lastProductDetail/lastProductDetail";
import UsersTable from "./components/contentWrapper/usersTable/usersTable"
import Error404 from "./components/errors/404";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNavBar />
          {/*<ContentWrapper />*/}
          <Switch>
            <Route path="/dashboard" exact={true} component={ContentWrapper} />
            <Route path="/pages" exact={true} component={MovieDetail} />
            <Route path="/charts" exact={true} component={GenresInDb} />
            <Route path="/tables" exact={true} component={ProductsTable} />
            <Route path="/users" exact={true} component={UsersTable} />
            <Route path="/" exact={true} component={ContentWrapper} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

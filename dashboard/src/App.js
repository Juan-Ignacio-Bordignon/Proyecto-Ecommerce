import "./assets/css/app.css";
import SideBar from "./components/sideBar/sideBar";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import TopNavBar from "./components/contentWrapper/topNavBar/topNavBar";
import Footer from "./components/contentWrapper/footer/footer";

import { Switch, Route } from "react-router-dom";
import ProductsTable from "./components/contentWrapper/productsTable/productsTable";
import GenresInDb from "./components/contentWrapper/contentCard/typesInDb/typesInDb";
import LastProductDetail from "./components/contentWrapper/contentCard/lastProductDetail/lastProductDetail";
import UsersTable from "./components/contentWrapper/usersTable/usersTable"
import Login from "./components/contentWrapper/login/login"
import Error404 from "./components/errors/404";
import Edit from "./components/contentWrapper/edit/edit";
import Create from "./components/contentWrapper/create/create";

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
            <Route path="/pages" exact={true} component={LastProductDetail} />
            <Route path="/charts" exact={true} component={GenresInDb} />
            <Route path="/tables" exact={true} component={ProductsTable} />
            <Route path="/users" exact={true} component={UsersTable} />
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/create" exact={true} component={Create}/>
            <Route path="/edit/:id" component={Edit}></Route>
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

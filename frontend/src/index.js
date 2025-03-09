import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import PrivateRoute from "components/PrivateRoute";

// Composant qui redirige selon authentification
const RootRedirect = () => <Redirect to="/admin/dashboard" />;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Route protégée via PrivateRoute */}
      <PrivateRoute path="/admin" component={Admin} />

      {/* Routes publiques */}
      <Route path="/auth" component={Auth} />

      {/* Route racine */}
      <Route exact path="/">
        <Redirect to="/admin/dashboard" />
      </Route>

      {/* Autres URLs renvoyées vers / */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

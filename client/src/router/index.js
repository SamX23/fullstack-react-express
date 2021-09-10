import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../components";

const Home = lazy(() => import("../pages/Home"));

const Routing = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/profile">
        <h1>Profile</h1>
      </Route>
      <Route path="/register">
        <h1>Register</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/games">
        <h1>Games Page</h1>
      </Route>
      <Route path="/list">
        <h1>List page</h1>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Suspense>
);

export default Routing;

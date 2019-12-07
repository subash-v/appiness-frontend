import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
// import somethingContainer from "./container/somethingContainer";
// import Login from "./components/Login";
import Home from "./Home.js";
import LoginContainer from "./container/LoginContainer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LoginContainer} />
          <Route exact path={"/employeelistpage"} component={Home} />
          {/* <Route>
            <Redirect to={NOTFOUND}></Redirect>
          </Route> */}
        </Switch>
        {/* <ModalContainer />
        <ToastContainer /> */}
      </BrowserRouter>
    );
  }
}

export default App;

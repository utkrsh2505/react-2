import React from "react";

import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ContactUs } from "../Pages/ContactUs";
import { FAQ } from "../Pages/FAQ";
import { About } from "../Pages/About";
const Routes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/ContactUs">
        <ContactUs />
      </Route>
      <Route exact path="FAQ">
        <FAQ />
      </Route>
    </div>
  );
};
export default Routes;

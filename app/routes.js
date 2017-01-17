import React from "react";
import {Route, IndexRoute} from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hydrological from "./pages/Hydrological";
import SelfHelpTech from "./pages/Self-HelpTechnology";

export default (
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path='hydro' component={Hydrological} />
      <Route path='selfhelp' component={SelfHelpTech} />
    </Route>
);

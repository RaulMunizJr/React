import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlesPage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          {/* Switch ensures that only one route is rendered at a time, Make sure to put 'Not Found' last as it will always match! */}
          <Switch>
            <Route path="/" component={HomePage} exact />
            {/* Route accepts two props, <Path Component> */}
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlesPage} />
            {/* :name is 'url parameter',
              passes prop called match to the component
          */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

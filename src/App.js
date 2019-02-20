import React, { Component } from "react";
import classes from "./App.module.css";
import { Switch, Route, Redirect, NavLink, withRouter } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import News from "./containers/News/News";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import { connect } from "react-redux";

class App extends Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={link.label + index}>
          <NavLink to={link.to} exact={link.exact}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const links = [
      { to: "/", label: "На главную", exact: true },
      { to: "/news", label: "Новости", exact: false },
      { to: "/profile", label: "Профиль", exact: false }
    ];
    return (
      <div className={classes.App}>
        <header>
          <nav>
            <ul>{this.renderLinks(links)}</ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" exact component={News} />
          <Route path="/login" exact component={Auth} />

          {this.props.isAuth ? (
            <Route path="/profile" exact component={Profile} />
          ) : (
            <Redirect to="login" exact />
          )}
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.app.isAuth
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authSuccess, valid, inValid } from "../../store/actions/app";
import classes from "./Auth.module.css";

class Auth extends Component {
  state = {
    valueLogin: "",
    valuePassword: ""
  };

  onChangeLogin = evt => {
    this.setState({
      valueLogin: evt.target.value
    });
  };

  onChangePassword = evt => {
    this.setState({
      valuePassword: evt.target.value
    });
  };

  onClickEntry = evt => {
    evt.preventDefault();
    if (
      this.state.valueLogin === "Admin" &&
      this.state.valuePassword === "12345"
    ) {
      this.props.history.push({
        pathname: "#/profile"
      });
      this.props.authSuccess();
      this.props.valid();
    } else {
      this.props.inValid();
    }
  };

  render() {
    return (
      <div className={classes.Auth}>
        <form>
          <label htmlFor="login">Login</label>
          <input id="login" type="text" onChange={this.onChangeLogin} />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={this.onChangePassword}
          />
          {this.props.error ? <span>Error</span> : null}
          <button onClick={this.onClickEntry}>Войти</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isValid: state.app.isValid,
    error: state.app.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authSuccess: () => {
      dispatch(authSuccess());
    },
    valid: () => {
      dispatch(valid());
    },
    inValid: () => {
      dispatch(inValid());
    }
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
);

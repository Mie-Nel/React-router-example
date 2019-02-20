import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Profile.module.css";

const Profile = props => {
  return <div className={classes.Profile}>Profile</div>;
};

export default withRouter(Profile);

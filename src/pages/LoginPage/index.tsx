import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import { startLogin } from "actions/auth";
import "./login-page.css";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Githabb</h1>
      <p>It's time to work hard and resolve all open issues</p>
      <Button onClick={startLogin} type="primary">
        Login with Google
      </Button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, Col, Button } from "antd";

import { startLogout } from "actions/auth";
import "./header.css";

const { Title } = Typography;

export const Header = ({ startLogout }) => (
  <header className="header">
    <Col offset={1}>
      <Link to="/issues">
        <Title level={2} type="secondary">
          Githabb
        </Title>
      </Link>
    </Col>
    <Button onClick={startLogout}>Logout</Button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

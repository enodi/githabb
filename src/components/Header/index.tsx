import React from "react";
import { Typography, Col } from "antd";

import "./header.css";

const { Title } = Typography;

const Header: React.FC = props => (
  <header className="header">
    <Col offset={1}>
      <Title level={2} type="secondary">
        Githabb
      </Title>
    </Col>
  </header>
);

export default Header;

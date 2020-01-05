import React from "react";
import { Row, Icon, Typography } from "antd";

import "./subheader.css";
const { Text } = Typography;

const Subheader: React.FC = () => (
  <Row className="subheader__content">
    <Icon type="book" />
    <Text className="subheader__text-color">facebook</Text>
    <span>/</span>
    <Text className="subheader__text-color" strong>
      create-react-app
    </Text>
  </Row>
);

export default Subheader;

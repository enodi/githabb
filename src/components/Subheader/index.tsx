import React, { Fragment } from "react";
import { Row, Icon, Typography } from "antd";

import ProjectTabs from "components/ProjectTabs";
import "./subheader.css";
const { Text } = Typography;

const Subheader: React.FC = () => (
  <Fragment>
    <Row className="subheader__content">
      <Row>
        <Icon type="book" />
        <Text className="subheader__text-color">facebook</Text>
        <span>/</span>
        <Text className="subheader__text-color" strong>
          create-react-app
        </Text>
      </Row>
      <Row>
        <ProjectTabs />
      </Row>
    </Row>
  </Fragment>
);

export default Subheader;

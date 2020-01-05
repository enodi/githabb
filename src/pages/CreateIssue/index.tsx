import React, { Fragment } from "react";
import { Row } from "antd";

import ProjectTabs from "components/ProjectTabs";
import Header from "components/Header";
import Subheader from "components/Subheader";

const CreateIssue: React.FC = () => (
  <Fragment>
    <Header />
    <Subheader />
    <Row className="subheader__content">
      <ProjectTabs />
    </Row>
  </Fragment>
);

export default CreateIssue;

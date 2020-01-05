import React, { Fragment } from "react";
import { Row } from "antd";

import Subheader from "components/Subheader";
import ProjectTabs from "components/ProjectTabs";

const ViewIssue: React.FC = () => (
  <Fragment>
    <Subheader />
    <Row className="subheader__content">
      <ProjectTabs />
    </Row>
  </Fragment>
);

export default ViewIssue;

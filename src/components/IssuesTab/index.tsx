import React, { Fragment } from "react";
import { Button, Row, Input } from "antd";

import IssuesTable from "components/IssuesTable";

const { Search } = Input;

const IssuesTab: React.FC = () => (
  <Fragment>
    <Row type="flex" justify="space-between" style={{ marginBottom: "2rem" }}>
      <Search style={{ width: "60%" }} enterButton />
      <Button type="primary">New Issue</Button>
    </Row>
    <Row>
      <IssuesTable />
    </Row>
  </Fragment>
);

export default IssuesTab;

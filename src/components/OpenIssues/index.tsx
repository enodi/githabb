import React, { Fragment } from "react";
import { Button, Row, Input } from "antd";

import IssuesList from "components/IssuesList";

const { Search } = Input;

const OpenIssues: React.FC = () => (
  <Fragment>
    <Row type="flex" justify="space-between" style={{ marginBottom: "2rem" }}>
      <Search style={{ width: "60%" }} enterButton />
      <Button type="primary" href="/issues/new">
        New Issue
      </Button>
    </Row>
    <Row>
      <IssuesList />
    </Row>
  </Fragment>
);

export default OpenIssues;

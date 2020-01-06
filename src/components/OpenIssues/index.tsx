import React, { Fragment, useEffect } from "react";
import { Button, List, Typography, Row, Icon, Select } from "antd";
import { connect } from "react-redux";

import { startListIssues, startSortIssues } from "actions/issues";

const { Option } = Select;

interface Props {
  startListIssues: () => void;
  startSortIssues: (data: any) => void;
  issues: any;
}

const OpenIssues: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.startListIssues();
  }, []);

  const handleFilter = value => {
    props.startSortIssues(value);
  };

  const header = issues => {
    return (
      <Row type="flex" justify="space-between">
        <Row>
          <span>
            <Icon type="exclamation-circle" />
            <Typography.Text strong style={{ marginLeft: "0.5rem" }}>
              {issues.length} opened
            </Typography.Text>
          </span>
          <span style={{ marginLeft: "1rem" }}>
            <Icon type="check" />
            <Typography.Text style={{ marginLeft: "0.5rem" }}>
              0 Closed
            </Typography.Text>
          </span>
        </Row>
        <Row>
          <Select
            defaultValue="Sort by"
            style={{ width: 150 }}
            onSelect={handleFilter}
          >
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
        </Row>
      </Row>
    );
  };

  return (
    <Fragment>
      <Row type="flex" justify="end" style={{ marginBottom: "2rem" }}>
        <Button type="primary" href="/issues/new">
          New Issue
        </Button>
      </Row>
      <Row>
        <List
          header={header(props.issues)}
          bordered
          dataSource={props.issues}
          renderItem={(item: any) => (
            <List.Item>
              <Icon type="exclamation-circle" />
              <Typography.Text strong style={{ marginLeft: "0.5rem" }}>
                {item.title}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Row>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  startListIssues: () => dispatch(startListIssues()),
  startSortIssues: data => dispatch(startSortIssues(data))
});

const mapStateToProps = state => ({
  issues: state.issues
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenIssues);

import React, { Fragment, useEffect } from "react";
import { Button, List, Typography, Row, Icon, Dropdown, Menu } from "antd";
import { connect } from "react-redux";

import { startListIssues } from "actions/issues";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

interface Props {
  startListIssues: () => void;
  issues: any;
}

const OpenIssues: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.startListIssues();
  }, []);

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
          <Dropdown overlay={menu} trigger={["click"]}>
            <a className="ant-dropdown-link" href="#!">
              Sort <Icon type="down" />
            </a>
          </Dropdown>
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
  startListIssues: () => dispatch(startListIssues())
});

const mapStateToProps = state => ({
  issues: state.issues
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenIssues);

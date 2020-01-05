import React from "react";
import { List, Typography, Row, Icon, Dropdown, Menu } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

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

const header = (
  <Row type="flex" justify="space-between">
    <Row>
      <span>
        <Icon type="exclamation-circle" />
        390 Open
      </span>
      <span>
        <Icon type="check" />
        4920 Closed
      </span>
    </Row>
    <Row>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#!">
          Author <Icon type="down" />
        </a>
      </Dropdown>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#!">
          Sort <Icon type="down" />
        </a>
      </Dropdown>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#!">
          Assignee <Icon type="down" />
        </a>
      </Dropdown>
    </Row>
  </Row>
);

const IssuesList: React.FC = () => (
  <List
    header={header}
    bordered
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Typography.Text mark>[ITEM]</Typography.Text> {item}
      </List.Item>
    )}
  />
);

export default IssuesList;

import React from "react";
import { Tabs, Icon } from "antd";

import IssuesTab from "components/IssuesTab";
import { history } from "router/AppRoute";

const { TabPane } = Tabs;

const ProjectTabs: React.FC = () => (
  <Tabs
    type="card"
    defaultActiveKey="issues"
    onTabClick={key => history.push(`${key}`)}
  >
    <TabPane
      tab={
        <span>
          <Icon type="code" />
          Code
        </span>
      }
      key="code"
      disabled
    >
      Content of Tab Pane 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="issues-close" />
          Issues
        </span>
      }
      key="issues"
    >
      <IssuesTab />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="pull-request" />
          Pull requests
        </span>
      }
      key="pulls"
      disabled
    >
      Content of Tab Pane 3
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="play-square" />
          Actions
        </span>
      }
      key="actions"
      disabled
    >
      Content of Tab Pane 4
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="project" />
          Projects
        </span>
      }
      key="projects"
      disabled
    >
      Content of Tab Pane 5
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="security-scan" />
          Security
        </span>
      }
      key="security"
      disabled
    >
      Content of Tab Pane 6
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="bar-chart" />
          Insights
        </span>
      }
      key="insights"
      disabled
    >
      Content of Tab Pane 7
    </TabPane>
  </Tabs>
);

export default ProjectTabs;

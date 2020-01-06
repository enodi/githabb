import React from "react";
import { Row, Icon, Typography } from "antd";
import { connect } from "react-redux";

import "./subheader.css";

const { Text } = Typography;

interface Props {
  name: string;
}

const Subheader: React.FC<Props> = (props: Props) => {
  const username = props.name.split(" ")[0].toLowerCase();
  return (
    <Row className="subheader__content">
      <Icon type="book" />
      <Text className="subheader__text-color">{username}</Text>
      <span>/</span>
      <Text className="subheader__text-color" strong>
        githabb-issues
      </Text>
    </Row>
  );
};

const mapStateToProps = state => ({
  name: state.auth.displayName
});

export default connect(mapStateToProps)(Subheader);

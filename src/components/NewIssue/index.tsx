import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Input, Button, Row, Form } from "antd";
import { connect } from "react-redux";

import { startAddIssue } from "actions/issues";
import { history } from "router/AppRoute";

interface Props {
  startAddIssue: (data: any) => void;
}

const NewIssue: React.FC<Props> = (props: Props) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.startAddIssue({ title, text });
    history.push("/issues");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Title"
          size="large"
          type="text"
          style={{ marginBottom: "1.5rem" }}
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </Form.Item>
      <Form.Item>
        <Editor
          initialValue="Leave a comment"
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | removeformat | help"
          }}
          onChange={e => setText(e.target.getContent().replace(/<[^>]+>/g, ""))}
          value={text}
        />
      </Form.Item>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: "1.5rem" }}
        >
          Submit Issue
        </Button>
      </Row>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  startAddIssue: issue => dispatch(startAddIssue(issue))
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewIssue);

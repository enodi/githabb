import React, { Fragment } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Input, Button, Row } from "antd";

const NewIssue: React.FC = () => {
  const handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <Fragment>
      <Input
        placeholder="Title"
        size="large"
        style={{ marginBottom: "1.5rem" }}
      />
      <Editor
        initialValue="<p>Leave a comment</p>"
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
        onChange={handleEditorChange}
      />
      <Row type="flex" justify="end">
        <Button type="primary" style={{ marginTop: "1.5rem" }}>
          Submit Issue
        </Button>
      </Row>
    </Fragment>
  );
};

export default NewIssue;

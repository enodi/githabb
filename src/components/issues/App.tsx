import React from "react";
import { Button } from "antd";

import "./app.css";

const App: React.FC = () => {
  return (
    <main className="app">
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="foo.bar">I'm a link. Click me, please!</a>
    </main>
  );
};

export default App;

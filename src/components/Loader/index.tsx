import React from "react";

import loader from "images/loader.gif";
import "./loader.css";

const Loader = () => (
  <div className="loader">
    <img className="loader__image" src={loader} alt="loader" />
  </div>
);

export default Loader;

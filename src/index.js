import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./components/layout/Layout";
import GlobalStyle from "./components/ui/global-styles.styled";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

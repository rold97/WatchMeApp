import React, { Fragment } from "react";
import requests from "../Requests";

import Main from "../components/Main";
import Row from "../components/Row";

function Home() {
  return (
    <Fragment>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
    </Fragment>
  );
}

export default Home;

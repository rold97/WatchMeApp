import React, { Fragment } from "react";
import requests from "../Requests";

import Main from "../components/Main";
import Row from "../components/MoviesRow";
import TariffPlansRow from "../components/TariffPlansRow";

function Home() {
  return (
    <Fragment>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <TariffPlansRow title="Tariff plans" />
    </Fragment>
  );
}

export default Home;

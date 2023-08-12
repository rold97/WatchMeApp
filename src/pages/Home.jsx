import React, { Fragment } from "react";
import requests from "../Requests";

import Main from "../components/Main";
import Row from "../components/MoviesComp/MoviesRow";
import TariffPlansRow from "../components/TariffsComp/TariffPlansRow";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

function Home() {
  return (
    <Fragment>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <TariffPlansRow title="Tariff plans" />
      <Questions></Questions>
      <Footer />
    </Fragment>
  );
}

export default Home;

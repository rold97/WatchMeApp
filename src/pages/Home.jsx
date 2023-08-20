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
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Upcoming" fetchURL={requests.requestUpcoming} />
      {/* <TariffPlansRow title="Tariff plans" /> */}
      <Questions />
      <Footer />
    </Fragment>
  );
}

export default Home;

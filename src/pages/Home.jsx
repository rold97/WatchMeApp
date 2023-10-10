import React, { Fragment } from "react";
import requests from "../Requests";

import Main from "../components/Main";
import Row from "../components/MoviesComp/MoviesRow";

import Questions from "../components/Questions";

function Home() {
  return (
    <Fragment>
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="3" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Questions />
    </Fragment>
  );
}

export default Home;

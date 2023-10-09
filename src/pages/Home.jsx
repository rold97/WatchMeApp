import React, { Fragment } from "react";
import requests from "../Requests";

import Main from "../components/Main";
import Row from "../components/MoviesComp/MoviesRow";

import Questions from "../components/Questions";
import Footer from "../components/Footer";

function Home() {
  // document.addEventListener("click", (e) => {
  //   // Retrieve id from clicked element
  //   let elementId = e.target.id;
  //   // If element has id
  //   if (elementId !== "") {
  //     console.log(elementId);
  //     const itemId = elementId;
  //   }
  //   // If element has no id
  //   else {
  //     console.log("An element without an id was clicked.");
  //   }
  // });

  return (
    <Fragment>
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="3" title="Upcoming" fetchURL={requests.requestUpcoming} />
      {/* <TariffPlansRow title="Tariff plans" /> */}
      <Questions />
    </Fragment>
  );
}

export default Home;

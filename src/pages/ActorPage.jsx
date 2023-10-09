import React from "react";
import { useParams } from "react-router-dom";
import PersonInfo from "../components/PersonInfo";

const ActorPage = () => {
  const { id } = useParams();

  return (
    <div>
      <PersonInfo personId={id} />
    </div>
  );
};

export default ActorPage;

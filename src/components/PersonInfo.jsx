import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviesListByActor from "./MoviesListByActor";

const PersonInfo = (props) => {
  const key = "1184cf59b751ed79cd2eace68f22426c";

  const [actorInfo, setActorInfo] = useState();

  const getActorInfo = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/person/${props.personId}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setActorInfo(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getActorInfo();
  }, []);

  return (
    <div>
      <div className="w-full h-[1100px] text-white ">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1110px] bg-gradient-to-b from-black/40 to-black" />
          <img
            className="w-full h-full object-cover "
            src={`https://image.tmdb.org/t/p/original/${actorInfo?.profile_path}`}
            alt={actorInfo?.name}
          />
        </div>
        <div className="absolute w-full top-[25%] pl-[150px]">
          <div className="flex gap-12 items-center">
            <img
              className="w-[400px] shadow-2xl h-[600px]"
              src={`https://image.tmdb.org/t/p/original/${actorInfo?.profile_path}`}
              alt={actorInfo?.name}
            />

            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {actorInfo?.name}
              </h1>
              <div className="flex gap-10">
                <p className="text-gray-400 pt-2 text-base">
                  Birthday: {actorInfo?.birthday}
                </p>
                <p className="text-gray-400 pt-2 text-base">
                  {actorInfo?.deathday
                    ? `Deathday: ${actorInfo?.deathday}`
                    : ""}
                </p>
              </div>
              <p className="text-gray-400 py-2 text-base">
                Place of birth: {actorInfo?.place_of_birth}
              </p>
              <p className="text-lg font-medium w-[80%]">
                {" "}
                {actorInfo?.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="px-36 bg-black">
        <h2 className="text-3xl  font-semibold text-white pt-4">
          {`More with ${actorInfo?.name} ...`}
        </h2>
        <MoviesListByActor personId={props.personId} />
      </section>
    </div>
  );
};

export default PersonInfo;

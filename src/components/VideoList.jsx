import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);
  const key = "1184cf59b751ed79cd2eace68f22426c";

  let trailerVideos;
  useEffect(() => {
    const getVideos = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/${props.type}/${props.id}/videos?api_key=${key}&language=en-US`
        )
        .then((response) => {
          setVideos(response.data.results.slice(0, 5));
          console.log(response);
        })
        .catch((err) => console.error(err));
    };
    getVideos();
  }, [props.id, trailerVideos, props.type]);
  console.log(trailerVideos);
  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

const Video = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="pb-12 flex flex-col justify-center items-center w-full-300px ">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-white pt-4">{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;

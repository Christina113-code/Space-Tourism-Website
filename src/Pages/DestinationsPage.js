import React, { useState } from "react";
import content from "../assets/data.json";
//testing to see that path exists. It does
import moon from "../assets/destination/image-moon.png";
import europa from "../assets/destination/image-europa.png";
import mars from "../assets/destination/image-mars.png";
import titan from "../assets/destination/image-titan.png";
import Page from "./Page";

const DestinationsPage = () => {
  const imgs = [moon, mars, europa, titan];
  const [planetIndex, setPlanetIndex] = useState(0);
  const switchPage = (i) => {
    setPlanetIndex(i);
  };

  return (
    <Page
      img={imgs[planetIndex]}
      menu={
        <ul className="flex items-center justify-center">
          <li
            className=" uppercase font-condensed tracking-widest text-sm text-light-gray px-3"
            onClick={() => switchPage(0)}
          >
            Moon
          </li>
          <li
            className="uppercase font-condensed tracking-widest text-sm text-light-gray px-3"
            onClick={() => switchPage(1)}
          >
            Mars
          </li>
          <li
            className="uppercase font-condensed tracking-widest text-sm text-light-gray px-3"
            onClick={() => switchPage(2)}
          >
            Europea
          </li>
          <li
            className="uppercase font-condensed tracking-widest text-sm text-light-gray px-3"
            onClick={() => switchPage(3)}
          >
            Titan
          </li>
        </ul>
      }
      header={
        <h1>
          <span className="text-light-gray/30  font-semibold px-2">
            01
          </span>{" "}
          Pick your destination
        </h1>
      }
      page = 'destination'
      subtitle={content.destinations[planetIndex].role}
      title={<p className="text-6xl">{content.destinations[planetIndex].name}</p>}
      description={content.destinations[planetIndex].description}
      time = {content.destinations[planetIndex].travel}
      dist = {content.destinations[planetIndex].distance}
    />
  );
};

export default DestinationsPage;

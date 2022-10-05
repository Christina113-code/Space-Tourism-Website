import React from "react";
import { useState } from "react";
import content from "../assets/data.json";
import doug from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import vic from "../assets/crew/image-victor-glover.png";
import an from "../assets/crew/image-anousheh-ansari.png";
import Page from "./Page";

const CrewPage = () => {
  const switchPage = (i) => {
    setmemberIndex(i);
  };

  const imgs = [doug, mark, vic, an];
  const [memberIndex, setmemberIndex] = useState(0);
  return (
    <Page
    page='crew'
      img={imgs[memberIndex]}
      menu={
        <ul className="flex gap-4 items-center justify-center" >
          <li className = "bg-light-gray/30 cursor-pointer rounded-full w-2.5 h-2.5 active:bg-light-gray focus:bg-light-gray hover:bg-light-gray" onClick={() => switchPage(0)}></li>
          <li className = "bg-light-gray/30 cursor-pointer rounded-full w-2.5 h-2.5 active:bg-light-gray focus:bg-light-gray hover:bg-light-gray" onClick={() => switchPage(1)}></li>
          <li className = "bg-light-gray/30 cursor-pointer rounded-full w-2.5 h-2.5 active:bg-light-gray focus:bg-light-gray hover:bg-light-gray" onClick={() => switchPage(2)}></li>
          <li className = "bg-light-gray/30 cursor-pointer rounded-full w-2.5 h-2.5 active:bg-light-gray focus:bg-light-gray hover:bg-light-gray" onClick={() => switchPage(3)}></li>
        </ul>
      }
      header={
        <h1>
          <span className="text-light-gray/30  font-semibold px-2">02</span>{" "}
          Meet your crew
        </h1>
      }
      subtitle={content.crew[memberIndex].role}
      title={<h1 className="text-2xl md:text-4xl">{content.crew[memberIndex].name}</h1>}
      description={content.crew[memberIndex].bio}
    />
  );
};

export default CrewPage;

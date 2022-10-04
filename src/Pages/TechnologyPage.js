import React, { useState } from "react";
import content from '../assets/data.json';
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import port from '../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import Page from "./Page";

const TechnologyPage = () => {
  const imgs = [launch, port, capsule];
  const [techIndex, settechIndex] =useState(0);
  const switchPage = (i) =>{
    settechIndex(i);
  }
  return (
  <Page img = {imgs[techIndex]} page='tech' menu={<ul className="flex gap-4 items-center justify-center">
    <li className = "font-bellefair w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:bg-white hover:text-black flex items-center justify-center leading-none"onClick={()=>switchPage(0)}>1</li>
    <li className = "font-bellefair w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:bg-white hover:text-black flex items-center justify-center leading-none "onClick={()=>switchPage(1)}>2</li>
    <li className = "font-bellefair w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:bg-white hover:text-black flex items-center justify-center leading-none"onClick={()=>switchPage(2)}>3</li>
  </ul>} subtitle = {<h2 className="uppercase tracking-widest font-condensed text-light-gray text-center">The terminology...</h2>}header = {<h1><span className="text-light-gray/30  font-semibold px-2">03</span> Space Launch 101</h1>} title={<h1 className="text-2xl">{content.technology[techIndex].name}</h1>} description={content.technology[techIndex].description} />

  );
};

export default TechnologyPage;

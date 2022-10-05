import React, { useState } from "react";
import content from '../assets/data.json';
import portrait_launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import portrait_port from '../assets/technology/image-spaceport-portrait.jpg';
import portrait_capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import landscape_launch from '../assets/technology/image-launch-vehicle-landscape.jpg';
import landscape_port from '../assets/technology/image-spaceport-landscape.jpg';
import landscape_capsule from '../assets/technology/image-space-capsule-landscape.jpg';
import Page from "./Page";

const TechnologyPage = () => {
  const imgs = [portrait_launch,portrait_port,portrait_capsule];
  const wide_imgs = [landscape_launch,landscape_port, landscape_capsule];
  const [techIndex, settechIndex] =useState(0);
  const switchPage = (i) =>{
    settechIndex(i);
  }
  return (
  <Page page='tech' img={imgs[techIndex]} img_wide = {wide_imgs[techIndex]} menu={<ul className="flex gap-4 items-center justify-center">
    <li className = "font-bellefair cursor-pointer w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:border-white  flex items-center justify-center leading-none"onClick={()=>switchPage(0)}>1</li>
    <li className = "font-bellefair cursor-pointer w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:border-white  flex items-center justify-center leading-none "onClick={()=>switchPage(1)}>2</li>
    <li className = "font-bellefair cursor-pointer w-10 h-10 rounded-full border-light-gray/30 border-2 text-white active:text-black active:bg-white focus:bg-white focus:text-black hover:border-white  flex items-center justify-center leading-none"onClick={()=>switchPage(2)}>3</li>
  </ul>} subtitle = {<h2 className="uppercase tracking-widest font-condensed text-light-gray text-center">The terminology...</h2>}header = {<h1><span className="text-light-gray/30  font-semibold px-2">03</span> Space Launch 101</h1>} title={<h1 className="text-2xl">{content.technology[techIndex].name}</h1>} description={content.technology[techIndex].description} />

  );
};

export default TechnologyPage;

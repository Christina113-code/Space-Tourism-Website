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
  <Page img = {imgs[techIndex]} menu={<ul>
    <li onClick={()=>switchPage(0)}>0</li>
    <li onClick={()=>switchPage(1)}>0</li>
    <li onClick={()=>switchPage(2)}>0</li>
  </ul>} header = {<h1><span>03</span> Space Launch 101</h1>}subtitle= {content.destinations[techIndex].role} title={content.destinations[techIndex].name} description={content.destinations[techIndex].description} />

  );
};

export default TechnologyPage;

import React from 'react'
import { useState } from 'react';
import content from '../assets/data.json';
import doug from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import vic from '../assets/crew/image-victor-glover.png';
import an from '../assets/crew/image-anousheh-ansari.png';
import Page from './Page';

const CrewPage = () => {
  const switchPage = (i) =>{
    setmemberIndex(i);
  }

  const imgs = [doug, mark, vic, an];
  const [memberIndex, setmemberIndex] =useState(0);
  return (

    <Page img = {imgs[memberIndex]} menu={ <ul>
      <li onClick={()=>switchPage(0)}>0</li>
      <li onClick={()=>switchPage(1)}>0</li>
      <li onClick={()=>switchPage(2)}>0</li>
      <li onClick={()=>switchPage(3)}>0</li>
    </ul>} header = {<h1><span>02</span> Meet your crew</h1>}subtitle= {content.crew[memberIndex].role} title={content.crew[memberIndex].name} description={content.crew[memberIndex].bio} />
  )
}

export default CrewPage


import React from 'react'
import Page from './Page'
import '../App.css';
const Home = () => {
  return (
    <>
     <Page subtitle= {<h2>So, you want to travel to</h2>} title={<h1>Space</h1>} description={<p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>} />
<div className="page__white-circle">
    
    <p className = "page__white-circle__p">Explore</p>
  </div>
    </>
 
  )
}

export default Home
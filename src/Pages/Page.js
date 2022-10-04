import React from "react";

const Page = ({ page, img, menu, header, title, subtitle, description, bg_img, dist, time }) => {
  return (
    // bg-img later!!
    // <>
    //  {page === 'homepage'? <div  className={`h-screen bg-homepage-mobile md:bg-homepage-tablet lg:bg-homepage-desktop bg-cover`}>

    //  </div>:""}
    // </>
   
    <div className="bg-black h-screen">
      <h1 className="text-center uppercase text-white pt-4 font-condensed tracking-widest">{header}</h1>
{
page==='crew'? <img src={img} alt="" className="w-3/5 my-4 mx-auto mt-0 border-b-2 border-light-gray/30 "/>
:page==='tech'? <img src={img} alt="" className="w-full my-2 h-60"/>
: page==='homepage'? '':'' }     

      <div>{menu}</div>
      
      <h2 className="uppercase text-light-gray/30 font-condensed font-base text-center py-2">{subtitle}</h2>
      <h1 className="text-white text-6xl font-bellefair uppercase text-center">{title}</h1>
      <p className="text-light-gray font-barlow text-base text-center pb-4 px-8">{description}</p>
      {page==='destination'? <div className="TEMPORARY | bg-black">
    <hr></hr>
    <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2">Avg. distance</h3>
    <p className="text-center uppercase font-bellefair text-2xl text-white">{dist}</p>
    <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2">Est travel time</h3>
    <p className="text-center uppercase font-bellefair text-2xl text-white">{time}</p>
    </div>:""}
      {page==='homepage'? 
      <div className="circle | h-36 w-36 bg-white rounded-full flex items-center justify-center mt-16 mx-auto">
    
      <p className = "uppercase font-bellefair text-lg">Explore</p>
    </div>: ''
    }
   
    </div>
  );
};

export default Page;

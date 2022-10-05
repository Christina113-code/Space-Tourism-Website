import React from "react";

const Page = ({ page, img, img_wide, menu, header, title, subtitle, description, bg_img, dist, time }) => {
  return (
    // bg-img later!!
    // <>
    //  {page === 'homepage'? <div  className={`h-screen bg-homepage-mobile md:bg-homepage-tablet lg:bg-homepage-desktop bg-cover`}>

    //  </div>:""}
    // </>
   
    <div className="bg-black h-screen flex flex-col ">
      <h1 className="text-center uppercase text-white pt-4 font-condensed tracking-widest md:text-left px-8">{header}</h1>
{
page==='crew'? <img src={img} alt="" className="w-3/5 my-4 mx-auto mt-0 border-b-2 border-light-gray/30 md:order-last md:h-96 md:w-auto md:my-0"/>
:page==='tech'? <div>
<img 
  className="hidden w-full h-3/4 py-4 m-0 md:block"
  src={img_wide}
  alt=""
  />

<img 
className="md:hidden w-full h-3/4 py-4 m-0"
  src={img}
  alt=""/>
</div>
: page==='homepage'? '':
<img src={img}alt="" className="mx-auto py-6 w-3/4 md:w-80 "/>}     

    {page==='crew'?<div className="md:pt-4 md:order-5 md:pb-4">{menu}</div>: <div className="md:pt-4">{menu}</div>}
     
      
      <h2 className="uppercase text-light-gray/30 font-condensed font-base text-center py-2 md:pt-12 md:text-2xl ">{subtitle}</h2>
      <h1 className="text-white text-6xl font-bellefair uppercase text-center md:pb-6">{title}</h1>
      <p className="text-light-gray font-barlow text-base text-center pb-4 px-8 max-w-xl m-auto">{description}</p>
      {page==='destination'? <div className="TEMPORARY | bg-black md:flex md:justify-center py-8">
    <hr></hr>
    <div>    <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2 md:px-12 ">Avg. distance</h3>
    <p className="text-center uppercase font-bellefair text-2xl text-white">{dist}</p>
</div>
<div>    <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2 md:px-12">Est travel time</h3>
    <p className="text-center uppercase font-bellefair text-2xl text-white">{time}</p>
</div>
    </div>:""}
      {page==='homepage'? 
      <div className="circle | h-36 w-36 bg-white rounded-full flex items-center justify-center mt-16 mx-auto md:w-60 md:h-60 md:mt-12">
    
      <p className = "uppercase font-bellefair text-lg md:text-3xl">Explore</p>
    </div>: ''
    }
   
    </div>
  );
};

export default Page;

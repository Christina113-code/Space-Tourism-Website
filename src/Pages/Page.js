import React from "react";

const Page = ({ homepage, img, menu, header, title, subtitle, description, bg_img }) => {
  return (
    // bg-img later!!
    <div className="h-screen bg-black ">
     
      <h1 className="text-white pt-8">{header}</h1>
      <img src={img} alt="" />
      <div>{menu}</div>
      
      <subtitle className="uppercase text-light-gray font-condensed font-base text-center">{subtitle}</subtitle>
      <h1 className="text-white text-[80px] font-bellefair uppercase text-center ">{title}</h1>
      <p className="text-light-gray font-barlow text-base text-center pb-4 px-8">{description}</p>
      {homepage? 
      <div className="circle | h-36 w-36 bg-white rounded-full flex items-center justify-center mt-16 mx-auto">
    
      <p className = "uppercase font-bellefair text-lg">Explore</p>
    </div>: ''
    }
    </div>
  );
};

export default Page;

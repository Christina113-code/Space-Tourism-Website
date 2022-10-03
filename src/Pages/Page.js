import React from "react";

const Page = ({ img, menu, header, title, subtitle, description, bg_img }) => {
  return (
    // bg-img later!!
    <div className="h-screen bg-black">
     
      <h1 className="text-gray">{header}</h1>
      <img src={img} alt="" />
      <div>{menu}</div>
      
      <subtitle>{subtitle}</subtitle>
      <h1 >{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;

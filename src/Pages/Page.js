import React from "react";

const Page = ({ img, menu, header, title, subtitle, description, bg_img }) => {
  return (
    // bg-img later!!
    <div>
     
      <h1>{header}</h1>
      <img src={img} alt="" />
      <div>{menu}</div>
      <subtitle>{subtitle}</subtitle>
      <title>{title}</title>
      <p>{description}</p>
    </div>
  );
};

export default Page;

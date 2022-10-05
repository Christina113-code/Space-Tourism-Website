import React from "react";


const Page = ({
  page,
  img,
  img_wide,
  menu,
  header,
  title,
  subtitle,
  description,
  bg_img,
  dist,
  time,
}) => {
  return (
    <body
      className={`bg-${page}-mobile md:bg-${page}-tablet lg:bg-${page}-desktop h-screen bg-cover bg-center`}
    >
      <h1 className="text-center uppercase text-white pt-4 font-condensed tracking-widest md:text-left px-8">
        {header}
      </h1>
      <div className="lg:flex lg:flex-row justify-center align-center">
        {page === "crew" ? (
          <img
            src={img}
            alt=""
            className="w-2/5 my-4 mx-auto mt-0 border-b-2 border-light-gray/30 md:order-last md:h-96 md:w-auto md:my-0"
          />
        ) : page === "tech" ? (
          <div>
            <img
              className="hidden w-full h-3/4 py-4 m-0 md:block lg:hidden"
              src={img_wide}
              alt=""
            />

            <img
              className="md:hidden w-full max-h-96 py-4 m-0 lg:block"
              src={img}
              alt=""
            />
          </div>
        ) : page === "homepage" ? (
          ""
        ) : (
          <img src={img} alt="" className="mx-auto py-6 w-2/5 md:w-80 md:h-100 lg:w-auto lg:h-1/5" />
        )}
        <div>
          {page === "crew" ? (
            <div className="md:pt-4 md:order-5 md:pb-4">{menu}</div>
          ) : (
            <div className="md:pt-4">{menu}</div>
          )}

          <h2 className="uppercase text-light-gray/30 font-condensed font-base text-center py-2 md:pt-12 md:text-2xl ">
            {subtitle}
          </h2>
          <h1 className="text-white text-6xl font-bellefair uppercase text-center md:pb-6">
            {title}
          </h1>
          <p className="text-light-gray font-barlow text-base text-center pb-4 px-8 max-w-xl m-auto">
            {description}
          </p>
          {page === "destination" ? (
            <div className="TEMPORARY | bg-black md:flex md:justify-center py-8">
              <hr></hr>
              <div>
                {" "}
                <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2 md:px-12 ">
                  Avg. distance
                </h3>
                <p className="text-center uppercase font-bellefair text-2xl text-white">
                  {dist}
                </p>
              </div>
              <div>
                {" "}
                <h3 className="text-center uppercase text-light-gray font-condensed tracking-widest py-2 md:px-12">
                  Est travel time
                </h3>
                <p className="text-center uppercase font-bellefair text-2xl text-white">
                  {time}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {page === "homepage" ? (
         
            <a href="/destinations"className="circle | h-36 w-36 bg-white rounded-full flex items-center justify-center mt-16 mx-auto md:w-60 md:h-60 md:mt-12 hover:after:w-60 hover:after:h-60 hover:after:bg-light-gray/30 cursor-pointer ">
            <p className="uppercase font-bellefair text-lg md:text-3xl">
              Explore
            </p>
          </a>
 
        
         
          
         
        ) : (
          ""
        )}
      </div>
    </body>
  );
};

export default Page;

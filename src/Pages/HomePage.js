import React from "react";
import Page from "./Page";
import "../App.css";
const Home = () => {
  return (
    <>
      <Page
        page="homepage"
        subtitle={
          <h2 className="text-light-gray tracking-widest">So, you want to travel to</h2>
        }
        title={<h1 className="md:text-9xl md:py-4">Space</h1>}
        description={
          "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        }
      />
    </>
  );
};

export default Home;

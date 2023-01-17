import type { NextPage } from 'next';
import React from 'react';
import WithPublicRoute from "../components/wrappers/PublicWrapper";
import HomeComponent from "../components/Home";

const Home: NextPage = () => {
  return (
    <div className="p-0 bg-white h-screen">
      <HomeComponent />
    </div>
  );
};

export default WithPublicRoute(Home);

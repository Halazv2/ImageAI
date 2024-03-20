import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <h1>ImageAi</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;

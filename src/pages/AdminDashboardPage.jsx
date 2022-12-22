import React from "react";
import LeaderBoard from "../components/LeaderBoard";
import Navbar from "../components/Navbar";
import VideosSection from "../components/VideosSection";

const AdminDashboardPage = () => {
  return (
    <>
      <div className=" text-white bg-[#111111] ">
        <Navbar />
        <LeaderBoard />
        <VideosSection />
      </div>
    </>
  );
};

export default AdminDashboardPage;

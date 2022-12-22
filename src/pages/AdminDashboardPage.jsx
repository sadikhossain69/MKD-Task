import React from "react";
import LeaderBoard from "../components/LeaderBoard";
import Navbar from "../components/Navbar";

const AdminDashboardPage = () => {
  return (
    <>
      <div className=" text-white bg-[#111111] ">
        <Navbar />
        <LeaderBoard />
      </div>
    </>
  );
};

export default AdminDashboardPage;

// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <div className="w-full text-red-500">
        <Header />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* <Sidebar /> */}
        <div className="col-span-4 p-4 shadow bg-slate-200 min-h-screen">
            <Outlet />
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <div className="bg-white shadow-md rounded-md h-4/5"></div> */}
        </div>
      </div>
    </>
  );
}

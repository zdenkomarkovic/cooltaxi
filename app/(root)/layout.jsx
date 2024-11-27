import Navbar from "@/components/shared/navbar/page";
import Sidebar from "@/components/shared/Sidebar/page";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default layout;

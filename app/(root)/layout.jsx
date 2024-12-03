import Navbar from "@/components/shared/navbar/page";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="">
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default layout;

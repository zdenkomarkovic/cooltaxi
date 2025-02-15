import PozoviPadajuci from "../../components/pozovipadajuci/page";
import Footer from "../../components/shared/footer/page";
import Navbar from "../../components/shared/navbar/page";

import React from "react";

const layout = ({ children }) => {
  return (
    <main className="">
      <Navbar />
      <div>{children}</div>
      <PozoviPadajuci />
      <Footer />
    </main>
  );
};

export default layout;

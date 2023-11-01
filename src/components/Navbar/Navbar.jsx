import React from "react";
import Container from "../Container/Container";
import NavbarTop from "./NavbarTop";
import Navbar2nd from "./Navbar2nd";

const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-sm sticky top-0 z-[9999]">
      {/* 1st Nab */}

      <div className="bg-[#181818] py-1 hidden lg:block">
        <Container>
          <NavbarTop />
        </Container>
      </div>

      <Container>
        <Navbar2nd />
      </Container>
    </div>
  );
};

export default Navbar;

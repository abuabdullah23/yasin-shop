import Container from "@/components/Container/Container";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default WithLayout;

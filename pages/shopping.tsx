import BannerName from "@/components/shopping/BannerName";
import Catalog from "@/components/shopping/Catalog";
import Navbar from "@/components/shopping/Navbar";
import { Box, Container } from "@mui/material";
import React from "react";

function shopping() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        disableGutters
        className="bg-[#f7f7f7] w-full pb-3 
        sm:mx-auto sm:max-w-2xl sm:pb-5"
      >
        <Navbar />
        <BannerName />
        <Catalog />
      </Container>
    </>
  );
}

export default shopping;

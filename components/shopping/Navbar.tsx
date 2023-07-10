import { Box } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <>
      <Box sx={{
        textAlign: "center",
        bgcolor: "#06C755"
      }}
      className="h-8 w-full bg-[#06C755] mb-4">
        <nav className="text-[#f1f1f1] text-xl">Navbar</nav>
      </Box>
    </>
  );
}

export default Navbar;

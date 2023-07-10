import Profile from "@/components/Profile";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function profile() {
  return (
    <>
      <Profile />
      <div className="text-center mx-auto">
        <Link href={"/"}>
          <Button
            type="button"
            variant="outlined"
            className="w-32 h-14 mb-10 
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20
          border-[#06C755] text-[#06C755]
          hover:border-[#06c756f0] hover:text-[#06c756f0] hover:bg-[#06c7561a]
          active:border-[#06c756e0] active:text-[#06c756e0] active:bg-[#06c75620]"
          >
            Back
          </Button>
        </Link>
      </div>
    </>
  );
}

export default profile;

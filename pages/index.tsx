import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-w-full text-center p-24 ${inter.className}`}>
      <header
        className="font-medium text-5xl 
        sm:text-7xl sm:m-7
        lg:text-9xl lg:m-10"
      >
        NextJS & LIFF project
      </header>
      <div
        className="my-10 flex flex-col justify-center items-center 
      sm:my-12 
      lg:my-20 "
      >
        <Button
          variant="outlined"
          className="w-32 h-14 mb-10
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20"
        >
          <Link href={"/profile"}>Profile</Link>
        </Button>
        <Button
          variant="outlined"
          className="w-32 h-14 mb-10
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20
          border-[#06C755] text-[#06C755]
          hover:border-[#06c756f0] hover:text-[#06c756f0] hover:bg-[#06c7561a]
          active:border-[#06c756e0] active:text-[#06c756e0] active:bg-[#06c75620]"
        >
          <Link href={"/shopping"}>Let Shopping</Link>
        </Button>
      </div>
    </main>
  );
}

import liff from "@line/liff";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Catalog() {
  const [catalog, setCatalog] = useState<string[] | any>(null);
  const [coffee, setCoffee] = useState<number>(0);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      const fetchdata = await fetch(
        `${process.env.NEXT_PUBLIC_LIFF_URL}/api/food`
      );
      console.log(typeof fetchdata);
      const coffeeData = await fetchdata.json();
      console.log(coffeeData);
      setCatalog(coffeeData);
    };

    fetchCoffeeData();
  }, []);

  const handleSubmit = () => {
    console.log(`Total prices: ${60 * coffee}`);
    const messageText = `Liff project shopping app send your order :
    coffee : ${coffee} cup(s)
    Total prices: ${60 * coffee} Baht
    Thank you for shopping`;
    liff
      .sendMessages([
        {
          type: "text",
          text: messageText,
        },
      ])
      .then(() => {
        window.alert("Liff project shopping app!");
        liff.closeWindow();
      })
      .catch((err) => {
        window.alert("error!!" + err);
      });
  };

  return (
    <>
      <Box>
        <Box>
          <div className="w-[300px] h-[300px] aspect-auto relative mb-5">
            {catalog ? (
              <Image
                src={catalog ? catalog.coffee.file : null}
                alt="coffeepic"
                fill
              />
            ) : null}
          </div>
        </Box>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            component={"div"}
            textAlign={"center"}
          >
            Coffee
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            fontStyle={"italic"}
            textAlign={"center"}
            color={"#8e8e93"}
          >
            &quot; Coffee is a language itself. &quot;
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginY: "1rem",
            }}
          >
            <IconButton
              size="small"
              className="px-3 mx-2"
              onClick={() => setCoffee((prev) => prev===0? prev: prev - 1)}
            >
              -
            </IconButton>
            <div>{coffee}</div>
            <IconButton
              size="small"
              className="px-3 mx-2"
              onClick={() => setCoffee((prev) => prev + 1)}
            >
              +
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          my: "20px",
          mt: "5px",
        }}
      >
        <Divider />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            ml: "auto",
            width: "150px",
            marginRight: "20px",
            border: "1px solid #8e8e93",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" gutterBottom component={"div"}>
            In Cart
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coffees: <span className="ml-1">{Number(60 * coffee)}</span>
            <span className="ml-2">Baht</span>
          </Typography>
          <Divider />
          <Typography>
            Total: <span className="ml-5">{Number(60 * coffee)}</span>
            <span className="ml-3">Baht</span>
          </Typography>
        </Box>
        <Box
          sx={{
            ml: "auto",
            width: "150px",
            marginRight: "20px",
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleSubmit}
            className="mt-3 w-full border-[#06C755] text-[#06C755]
          hover:border-[#06c756f0] hover:text-[#06c756f0] hover:bg-[#06c7561a]
          active:border-[#06c756e0] active:text-[#06c756e0] active:bg-[#06c75620]"
          disabled={coffee===0? true : false}
          >
            Order ☕️
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Catalog;

import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import HotDatas from "@/components/main/HotDatas";
import NewDatas from "@/components/main/NewDatas";
import Image from "next/image";
import banner from "/public/img/sample_banner.png"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`/next_data_market/data/products.json`).then((res) => {
      console.log(res.data.products)
      setProducts(res.data.products)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const WrapBoxStyle = {
    my: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  return (
    <Container maxWidth="xl" fiexd>
      <Box sx={WrapBoxStyle}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image src={banner} alt="banner" width="100%"></Image>
        </Box>
        <NewDatas products={products} />
        <HotDatas products={products} />
      </Box >
    </Container >
  )
}


import Image from "next/image"
import logo from "/public/img/logo.png"
import { Box, Button, Container, Typography } from "@mui/material"

export default function Footer() {
  const BoxStyle = {
    borderTop: "1px solid rgb(237, 242, 245)",
    py: "2.5rem",
  }
  const ContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
  return (
    <Box sx={BoxStyle}>
      <Container maxWidth="xl" sx={ContainerStyle}>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Image src={logo} alt="logo" width={200}></Image>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pl: "5rem" }}>
            <Typography variant="h6" component="h2" fontSize="1.25rem">아타드 주식회사</Typography>
            <Typography variant="p" fontSize=".8rem">대표 홍길동 ｜ 사업자번호 123-12-12345</Typography>
            <Typography variant="p" fontSize=".8rem">주소 서울특별시 강남구 영동대로 602, H203</Typography>
            <Typography variant="p" fontSize=".8rem">Copyright©2023 ATAD All rights reserved.</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ py: "1rem", px: "1.5rem", borderRadius: "1rem" }}>개인정보취급방침</Button>
      </Container>
    </Box>
  )
}


import { Box, Collapse, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function index() {
  const [product, useProduct] = useState({});
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const router = useRouter();
  const id = (router.query.id)

  const handleButtonClick = (v) => {
    if (v === 1) {
      setOpen1(!open1);
    }
    if (v === 2) {
      setOpen2(!open2);
    }
    if (v === 3) {
      setOpen3(!open3);
    }
    if (v === 4) {
      setOpen4(!open4);
    }
    if (v === 5) {
      setOpen5(!open5);
    }
    if (v === 6) {
      setOpen6(!open6);
    }
  };

  useEffect(() => {
    axios.get(`/next_data_market/data/products.json`).then((res) => {
      useProduct(res.data.products.find((v) => v.id === Number(id)))
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Container maxWidth="xl">
      <Typography sx={{ my: "2rem", fontSize: "1.5rem", fontWeight: "bold" }}>{product.title}</Typography>
      <Grid container spacing="2rem">
        <Grid item xs={6}>
          <Box width="100%">
            <img src={product.img} alt="img" width="100%" style={{ borderRadius: "1.5rem" }} />
            <Box sx={{ border: "1px solid rgb(221, 228, 235)", p: "1.5rem", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem", mt: "2rem" }}>
              <Box sx={{
                display: "flex", justifyContent: "space-between", mb: "2rem"
              }}>
                <Typography component="h2" variant="h6">상품설명</Typography>
                <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(1)}>
                  {open1 ? "접기" : "펴기"}
                </Typography>
              </Box>
              <Collapse in={open1}>
                <Box>
                  <Typography component="p">{product.acc}</Typography>
                </Box>
              </Collapse>
            </Box>
            <Box sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem" }}>
              <Box sx={{
                display: "flex", justifyContent: "space-between", mb: "2rem"
              }}>
                <Typography component="h2" variant="h6">활용사례</Typography>
                <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(2)}>
                  {open2 ? "접기" : "펴기"}
                </Typography>
              </Box>
              <Collapse in={open2}>
                <Box>
                  <span>내용이 없습니다.</span>
                </Box>
              </Collapse>
            </Box>
            <Box sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem", borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}>
              <Box sx={{
                display: "flex", justifyContent: "space-between", mb: "2rem"
              }}>
                <Typography component="h2" variant="h6">샘플 데이터</Typography>
                <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(3)}>
                  {open3 ? "접기" : "펴기"}
                </Typography>
              </Box>
              <Collapse in={open3}>
                <Box>
                  <span>내용이 없습니다.</span>
                </Box>
              </Collapse>
            </Box>
          </Box>
        </Grid>
        {/*  */}
        <Grid item xs={6}>
          <Box width="100%" sx={{ border: "1px solid rgb(221, 228, 235)", p: "1.5rem", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }}>
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              <Typography component="h2" variant="h6">기본정보</Typography>
              <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(4)}>
                {open4 ? "접기" : "펴기"}
              </Typography>
            </Box>
            <Collapse in={open4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Typography component="p">기본정보</Typography>
                <Typography component="p">최종 수정일</Typography>
                <Typography component="p">기본개인/익명/가명정보</Typography>
                <Typography component="p">데이터 포맷</Typography>
                <Typography component="p">데이터 수량</Typography>
                <Typography component="p">데이터 사이즈</Typography>
                <Typography component="p">로열티</Typography>
                <Typography component="p">판매금액</Typography>
              </Box>
            </Collapse>
          </Box>
          {/*  */}
          <Box width="100%" sx={{ p: "1.5rem", border: "1px solid rgb(221, 228, 235)", borderTop: "none" }} >
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              <Typography component="h2" variant="h6">판매자 정보</Typography>
              <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(5)}>
                {open5 ? "접기" : "펴기"}
              </Typography>
            </Box>
            <Collapse in={open5}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Typography component="p">판매자(기업)명</Typography>
                <Typography component="p">담당자</Typography>
                <Typography component="p">이메일</Typography>
              </Box>
            </Collapse>
          </Box>
          {/*  */}
          <Box width="100%" sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem", borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}>
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              <Typography component="h2" variant="h6">판매이력</Typography>
              <Typography component="h2" sx={{ cursor: "pointer" }} variant="p" onClick={() => handleButtonClick(6)}>
                {open6 ? "접기" : "펴기"}
              </Typography>
            </Box>
            <Collapse in={open6}>
              <Box>
                <span>내용이 없습니다.</span>
              </Box>
            </Collapse>
          </Box>
        </Grid>
      </Grid >
    </Container >
  )
}


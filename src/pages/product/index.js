import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function index() {
  const [product, useProduct] = useState({});
  const router = useRouter();
  const id = (router.query.id)
  useEffect(() => {
    axios.get(`/data/products.json`).then((res) => {
      useProduct(res.data.products.find((v) => v.id === Number(id)))
      // console.log(res.data.products.find((v) => v.id === Number(id)))
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
                < Typography component="h2" variant="h6" >상품설명</Typography>
                < Typography component="h2" variant="p" >접기</Typography>
              </Box>
              <Box>
                <Typography component="p">{product.acc}</Typography>
              </Box>
            </Box>
            <Box sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem" }}>
              <Box sx={{
                display: "flex", justifyContent: "space-between", mb: "2rem"
              }}>
                < Typography component="h2" variant="h6" >활용사례</Typography>
                < Typography component="h2" variant="p" >접기</Typography>
              </Box>
            </Box>
            <Box sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem", borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}>
              <Box sx={{
                display: "flex", justifyContent: "space-between", mb: "2rem"
              }}>
                < Typography component="h2" variant="h6" >샘플 데이터</Typography>
                < Typography component="h2" variant="p" >접기</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/*  */}
        <Grid item xs={6}>
          <Box width="100%" sx={{ border: "1px solid rgb(221, 228, 235)", p: "1.5rem", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }}>
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              < Typography component="h2" variant="h6" >기본정보</Typography>
              < Typography component="h2" variant="p" >접기</Typography>
            </Box>
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
          </Box>
          {/*  */}
          <Box width="100%" sx={{ p: "1.5rem", border: "1px solid rgb(221, 228, 235)", borderTop: "none" }} >
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              < Typography component="h2" variant="h6" >판매자 정보</Typography>
              < Typography component="h2" variant="p" >접기</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography component="p">판매자(기업)명</Typography>
              <Typography component="p">담당자</Typography>
              <Typography component="p">이메일</Typography>
            </Box>
          </Box>
          {/*  */}
          <Box width="100%" sx={{ border: "1px solid rgb(221, 228, 235)", borderTop: "none", p: "1.5rem", borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}>
            <Box sx={{
              display: "flex", justifyContent: "space-between", mb: "2rem"
            }}>
              < Typography component="h2" variant="h6" >판매이력</Typography>
              < Typography component="h2" variant="p" >접기</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography component="p"></Typography>
            </Box>
          </Box>
        </Grid>
      </Grid >
    </Container >
  )
}


import eye from "/public/img/ic_eye_gray_16.84601f9a.png"
import heart from "/public/img/ic_heart_gray_16.29930d70.png"
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, Button, ButtonGroup, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

export default function HotDatas({ products }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: "2rem" }}>
        <Typography component="h2" variant="h6" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>인기 데이터셋</Typography>
        <ButtonGroup variant="contained" aria-label="text button group">
          <IconButton>
            <GridViewIcon />
          </IconButton>
          <IconButton>
            <ViewListIcon />
          </IconButton>
          <Button variant="text">View all</Button>
        </ButtonGroup>
      </Box>
      <Grid container spacing={2}>
        {products.map((v, i) => (
          <Grid item xs={3} key={i}>
            <Box sx={{ border: "1px solid #eee", borderRadius: "1.5rem", cursor: "pointer" }}>
              <img src={v.img} alt="img" width="100%" height={150} style={{ borderTopRightRadius: "1.5rem", borderTopLeftRadius: "1.5rem" }}></img>
              <Box sx={{ p: "1.2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  {v.tag.map((v, i) => (
                    <Box key={i} sx={{ bgcolor: "rgb(160, 121, 242)", p: "7px 7px", pt: "8px", color: "white", fontSize: ".7rem", borderRadius: "5px", textAlign: "center" }}>
                      <span>{v}</span>
                    </Box>
                  ))}
                </Box>
                <Typography component="h2" variant="h6" fontWeight="bold">{v.title}</Typography>
                <Typography component="p" sx={{ fontWeight: "400" }}>{v.acc}</Typography>
                <Typography component="p" sx={{ color: "rgb(162, 175, 188)" }}>{v.price}₩</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "gray" }}>판매자명</span>
                  <span>{v.seller}</span>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "rgb(162, 175, 188)" }}>{v.season}</span>
                  <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.3rem" }}>
                      <Image src={eye} alt="eye" width={20} height={20}></Image>
                      <span style={{ color: "rgb(162, 175, 188)" }}>{v.count}</span>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.3rem" }}>
                      <Image src={heart} alt="heart" width={20} height={20}></Image>
                      <span style={{ color: "rgb(162, 175, 188)" }}>{v.heart}</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))
        }
      </Grid >
    </>
  )
}


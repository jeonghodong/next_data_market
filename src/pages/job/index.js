import { Box, Container, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function index() {
  return (
    <Container maxWidth="xl" fiexd disableGutters>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="70vh">
        <InfoIcon sx={{ fontSize: "10rem" }} />
        <Typography variant="h1" sx={{ fontWeight: "300", fontSize: "3rem" }}>서비스 준비중입니다.</Typography>
        <Typography variant="p" sx={{
          textAlign: "center", marginTop: "1rem", fontSize: "1rem"
        }}>보다 나은 서비스를 위하여 페이지 준비중에 있습니다.<br /><br />
          빠른 시일내에 준비하겠습니다.</Typography>
      </Box>
    </Container >
  )
}


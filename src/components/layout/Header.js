import { Box, Button, Container, Dialog, DialogActions, DialogContent, Grid, Input, Modal, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import logo from "/public/img/logo.png"
import bell from "/public/img/ic_header_bell.png"
import crowdsourcing from "/public/img/ic_header_crowdsourcing.png"
import datamarket from "/public/img/ic_header_datamarket.png"
import wallet from "/public/img/ic_header_wallet.png"
import search from "/public/img/ic_search_gray.png"
import QR from "/public/img/qrCode.png"
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [walletOpen, setWelletOpen] = useState(false)
  const [crowdOpen, setCrowdOpen] = useState(false)

  const router = useRouter();

  const handleWalletOpen = () => {
    setWelletOpen(true);
  };
  const handleWalletClose = () => {
    setWelletOpen(false);
  };

  const handleCrowdOpen = () => {
    setCrowdOpen(true);
  }
  const handleCrowdClose = () => {
    setCrowdOpen(false);
  }
  const handleRouteJob = () => {
    router.push('/job')
    setCrowdOpen(false);
  }

  const InputBoxStyle = {
    border: "1px solid rgb(221, 228, 235)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    paddingLeft: ".8rem",
  }
  const HeaderBoxStyle = {
    borderBottom: "1px solid rgb(237, 242, 245)",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 10px"
  }
  const ModalBoxStyle = {
    width: "500px",
    height: "100vh",
    bgcolor: "white",
    position: "absolute",
    right: "0",
    padding: "0rem 2rem",
    outline: "none",
    overflowY: 'auto',
  }

  return (
    <Box sx={HeaderBoxStyle}>
      <Container maxWidth="xl" sx={{ padding: "1rem", border: "1px soild black" }}>
        <Grid container>
          <Grid item xs="1.5" >
            <Link href="/">
              <Image src={logo} alt="logo" width={150} style={{
                cursor: "pointer"
              }} />
            </Link>
          </Grid>
          <Grid item xs="8.5">
            <Box sx={InputBoxStyle}>
              <Image src={search} alt="logo" width="10%"></Image>
              <Input type="text" disableUnderline={true} sx={{ py: 1, pl: 1, width: "80%", }} size="small" placeholder='검색어를 입력해주세요.' />
            </Box>
          </Grid>
          <Grid item xs="2">
            <Box flex={1} display="flex" justifyContent="center" gap={1} >
              <Image src={datamarket} alt="logo" width={40} style={{
                cursor: "pointer"
              }}></Image>
              < Image src={crowdsourcing} onClick={handleCrowdOpen} alt="logo" width={40} style={{
                cursor: "pointer"
              }}></Image>
              <Image src={wallet} onClick={handleWalletOpen} alt="logo" width={40} style={{
                cursor: "pointer"
              }}></Image>
              <Image src={bell} alt="logo" width={40} style={{
                cursor: "pointer"
              }}></Image>
            </Box>
          </Grid>
        </Grid>
        <Modal open={walletOpen} onClose={handleWalletClose}>
          <Box sx={ModalBoxStyle} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Typography component={"h1"} variant="h4" fontWeight="bold">아타드 스마트 월렛</Typography>
            <Image src={logo} alt="logo" width={120} style={{
              cursor: "pointer", margin: "2rem 0rem"
            }} />
            <Image src={QR} alt="logo" width={300} style={{ border: "4px solid rgb(0, 118, 128)", borderRadius: "3px" }} />
            <TextField label="이메일 또는 휴대폰 번호" type="email" margin="normal" required autoFocus fullWidth></TextField>
            <TextField label="비밀번호" type="password" required
              autoFocus fullWidth></TextField>
            <Button fullWidth type="submit" variant="contained" color="primary" sx={{ my: "1rem", py: "1rem" }}>일반 로그인</Button>
            <Button fullWidth type="submit" variant="contained" sx={{ py: "1rem" }} color="secondary">DID 로그인</Button>
          </Box>
        </Modal>
        <Dialog open={crowdOpen} onClose={handleCrowdClose} aria-modal="true">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" p="3rem">
            <InfoIcon sx={{ fontSize: "10rem" }} />
            <DialogContent sx={{
              fontSize: "2rem", fontWeight: "bold", color: "rgba(0,0,0,.65)"
            }}>
              서비스 준비중입니다.
            </DialogContent>
            <DialogContent sx={{ fontSize: "1rem", color: "rgba(0,0,0,.64)" }}>
              ESC 버튼 또는 취소 버튼을 눌러주세요
            </DialogContent>
          </Box>
          <DialogActions display="flex" justifyContent="right">
            <Button onClick={handleRouteJob} variant="outlined">이동</Button>
            <Button variant="outlined" onClick={handleCrowdClose}> 취소</Button>
          </DialogActions>
        </Dialog>
      </Container >
    </Box >
  )
}



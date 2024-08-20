import { Container, Box, Typography, Button } from "@mui/material";

const BeautyWorld = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "50px"  }}>
        <Container> 
          <Box className="beautyworldcontainer">
            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{ fontWeight: "800", lineHeight: "80px", fontSize: "56px" }}
              >
                Discover the beauty around the world
              </Typography>
              <Typography
                sx={{
                  fontSize: "26px",
                  lineHeight: "35px",
                  fontWeight: "400",
                  color:"rgba(37, 37, 37, 0.55)"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu.
              </Typography>
              <Box>
                <Button variant="contained" sx={{ background: " #252525" }}>
                  Get Started
                </Button>
              </Box>
            </Box>
            <Box display={"flex"} sx={{ gap: "10px" }}>
              <Box sx={{width:"100%", height:"auto"}}>
                <img
                  src="src/assets/beautyworld/beautyword1.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
              <Box sx={{ marginTop: "80px",width:"100%", height:"auto" }}>
                <img
                  src="src/assets/beautyworld/beautyword2.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "50px", flexWrap: "warp" }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " rgba(37, 37, 37, 0.55)",
                  fontSize: "40px",
                  
                }}
              >
                01
              </Typography>
              <Box>
                <img
                  src="src/assets/beautyworld/beautiworld3.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " rgba(37, 37, 37, 0.55)",
                  fontSize: "40px",
                }}
              >
                02
              </Typography>
              <Box>
                <img
                  src="src/assets/beautyworld/beautyworld4.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " rgba(37, 37, 37, 0.55)",
                  fontSize: "40px",
                }}
              >
                03
              </Typography>
              <Box>
                <img
                  src="src/assets/beautyworld/beautyworld5.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default BeautyWorld;

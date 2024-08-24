import { Container, Box, Typography, Button } from "@mui/material";

const BeautyWorld = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "50px"  }}>
        <Container> 
          <Box className="beautyworldcontainer">
            <Box
              sx={{
                width:"544px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
           <Box sx={{ display: "flex",
                flexDirection: "column",
                gap: "32px",}}>
           <Box>
             <Typography
                className="Typowebherosection"
                sx={{ fontWeight: "600", lineHeight: "80px", fontSize: "56px" }}
                >
                Discover the beauty around the world
              </Typography>
             </Box>
             <Box>
             <Typography
                sx={{
                  width:"386px",
                  fontSize: "26px",
                  lineHeight: "35px",
                  fontWeight: "400",
                  color:"rgba(37, 37, 37, 0.55)"
                }}
                className="Typowebherosection"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu.
              </Typography>
             </Box>
              <Box>
                <Button variant="contained" sx={{
                  background: "rgba(37, 37, 37, 1)",
                  paddingRight:" 20px",
                  paddingLeft:"20px",
                  borderRadius:"16px",
                  paddingTop:"15px",
                  paddingBottom:"15px",
                  fontSize:"18px",
                  fontWeight:"400px",
                  lineHeight:"18px",
                  color:"rgba(255, 255, 255, 1)",
                }}>
                  Get Started
                </Button>
              </Box>
           </Box>
            </Box>
            <Box display={"flex"} sx={{ gap: "20px" }}>
              <Box sx={{width:"100%", height:"auto"}}>
                <img
                  src="src/assets/beautyworld/beautyword1.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
              <Box sx={{ paddingTop:"177px",width:"100%", height:"auto" }}>
                <img
                  src="src/assets/beautyworld/beautyword2.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "50px", flexWrap: "warp", marginTop:"60px" }}>
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

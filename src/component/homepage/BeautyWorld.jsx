import { Container, Box, Typography, Button } from "@mui/material";

const BeautyWorld = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "50px"}} >
        <Container>
          <Box sx={{ display: "flex" }}>
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
            <Box display={"flex"} sx={{ position: "relative", gap: "10px" }}>
              <Box>
                <img
                  src="src/assets/beautyword1.png"
                  alt=""
                  width={300}
                  height={400}
                />
              </Box>
              <Box sx={{ marginTop: "80px" }}>
                <img
                  src="src/assets/beautyword2.png"
                  alt=""
                  width={300}
                  height={400}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "50px", flexWrap:"warp" }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " #25252540",
                  fontSize: "40px",
                }}
              >
                01
              </Typography>
              <Box>
                <img
                  src="src/assets/beautiworld3.png"
                  alt=""
                  width={350}
                  height={379}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " #25252540",
                  fontSize: "40px",
                }}
              >
                02
              </Typography>
              <Box>
                <img
                  src="src/assets/beautyworld4.png"
                  alt=""
                  width={350}
                  height={379}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: " #25252540",
                  fontSize: "40px",
                }}
              >
                03
              </Typography>
              <Box>
                <img
                  src="src/assets/beautyworld5.png"
                  alt=""
                  width={350}
                  height={379}
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

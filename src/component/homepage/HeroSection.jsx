import { Container,Box, Typography, Button, } from "@mui/material";

const HeroSection = () => {
  return (
    <>
    
      <div>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "8px", md: "10px" },
             
              textAlign: "center",
              margin: "0 auto", // Center the container
              padding: { xs: "16px", md: "32px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "32px", md: "64px" }, // Responsive font size
                  lineHeight: { xs: "40px", md: "80px" }, // Responsive line height
                }}
              >
                Discover the beauty around the world
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#252525",
                  fontSize: { xs: "16px", md: "26px" },
                  lineHeight: { xs: "24px", md: "35px" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget diam.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: "#252525",
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      <div>
        <Container maxWidth="xxl">
        <Box
          className="container-md"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent:"center", gap:"10px", }}
        >
          <Box>
            <img src="src/assets/beautyworld1.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/herosecion2.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/herosection3.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/4herosection4.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/1herosection5.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/2herosection6.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/3herosection7.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/4herosection8.png" alt="" width={300}/>
          </Box>
        </Box>
        </Container>
      </div>
    </>
  );
};
export default HeroSection;

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
              textAlign:"center",
              alignItems:"center",
              gap:"24px",
              marginBottom:"20px",
              fontFamily:"serif"
             
            }}
          >
            <Box>
              <Typography
                sx={{
                  width:"600px",
                  fontWeight: "600",
                  fontSize: { xs: "32px", md: "64px" },
                  lineHeight: { xs: "40px", md: "80px" }, 
                  color:"rgba(37, 37, 37, 1)"
                }}
              className="Typowebherosection"
              >
                Discover the beauty around the world
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(37, 37, 37, 0.55)",
                  fontSize: { xs: "16px", md: "26px" },
                  lineHeight: { xs: "24px", md: "35px" },
                  width:"620px",
                }}
                className="Typowebherosection"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget diam.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                className="Typowebherosection"
                sx={{
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
            <img src="src/assets/herosection/herosection1.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/herosection/herosecion2.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/herosection/herosection3.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/herosection/4herosection4.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/herosection/1herosection5.png" alt="" width={300}/>
          </Box>
          <Box>
            <img src="src/assets/herosection/2herosection6.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/herosection/3herosection7.png" alt="" width={300} />
          </Box>
          <Box>
            <img src="src/assets/herosection/4herosection8.png" alt="" width={300}/>
          </Box>
        </Box>
        </Container>
      </div>
    </>
  );
};
export default HeroSection;

import { Container, Box, Typography, Button } from "@mui/material";
const SimpleSection = () => {
  return (
    <>
      <div>
        <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
          <Box className="SimpleSectioncontent">
            <Box>
              <Typography
                sx={{
                  fontSize: "60px",
                  lineHeight: "88px",
                  fontWeight: "800",
                }}
                className="Typowebherosection"
              >
                Just that simple
              </Typography>
            </Box>

            <Box
              sx={{
                width:"526px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "600px",
                gap:"16px",
               
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "26px",
                    lineHeight: "35px",
                    fontWeight: "400",
                    color:"rgba(37, 37, 37, 0.55)"
                  }}
                  className="Typowebherosection"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </Typography>
              </Box>
              <Box>
                <Button variant="contained"  sx={{
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
        </Container>
        <Container className="simpleimg" maxWidth="lg">
          <Box sx={{ width: "100%", height: "auto" }}>
            <img
              src="src/assets/simplectionsection/simple1.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Container>
      </div>
    </>
  );
};
export default SimpleSection;

import { Container, Box, Typography,Button } from "@mui/material";
const SimpleSection = () => {
  return (
    <>
      <div>
        <Container maxWidth="lg" sx={{marginTop:"60px"}}>
          <Box display={"flex"} height={"300px"}>
            <Container width={"674px"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "60px",
                    lineHeight: "88px",
                    fontWeight: "800",
                  }}
                >
                  Just that simple
                </Typography>
              </Box>
            </Container>
            <Container maxWidth="sm">
              <Box>
                <Typography
                  sx={{
                    fontSize: "26px",
                    lineHeight: "35px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" sx={{ background: " #252525" }}>
                  Get Started
                </Button>
              </Box>
            </Container>
          </Box>
          <Box>
          <img
            src="src/assets/simple1.png"
            alt=""
            width={"100%"}
            height={"auto"}
          />
          </Box>
        </Container>
      </div>
    </>
  );
};
export default SimpleSection;

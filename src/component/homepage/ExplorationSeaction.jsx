import {Container, Box, Typography, Button } from "@mui/material";
const ExplorationSeaction = () => {
  return (
    <>
 <Container className="Exploration" maxWidth="xl" >
      <Box className="ExplorationSectioncontent">
        <Box sx={{  height: "auto" }}>
          <img
            src="src/assets/explorationsection/ImageExloration1.png"
            alt=""
            width={"700px"}
            height={"900px"}
          />
        </Box>
        <Box
          maxWidth={"500px"}
          sx={{ display: "flex", flexDirection: "column", gap: "80px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <Box>
              <Typography className="Typowebherosection" fontSize={"64px"} lineHeight={"80px"}>
                Exploration and inspiration
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "26px",
                  lineHeight: "35px",
                  fontWeight: "400",
                  color: "rgba(37, 37, 37, 0.55)",
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
                variant="Contant"
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
          <Box sx={{display:"grid", gap:"40px", width:"500px"}}>
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "rgba(37, 37, 37, 0.55)",
                  lineHeight: "45px",
                  fontWeight: "800",
                }}
              >
                01
              </Typography>
              <Typography
                sx={{
                  width:"510px",
                  height:"99px",
                  fontSize: "24px",
                  color: "rgba(37, 37, 37, 0.55)",
                  lineHeight: "30px",
                  fontWeight: "400",
                }}
                className="Typowebherosection"
              >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "rgba(37, 37, 37, 0.55)",
                  lineHeight: "45px",
                  fontWeight: "800",
                }}
              >
                02
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "rgba(37, 37, 37, 0.55)",
                  lineHeight: "30px",
                  fontWeight: "400",
                }}
                className="Typowebherosection"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      </Container>
    </>
  );
};
export default ExplorationSeaction;

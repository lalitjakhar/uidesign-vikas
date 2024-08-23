import { Container, Box, Typography, Button } from "@mui/material";
const AdventureSection = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              
            }}
          >
            <Box sx={{ display: "grid", gap: "40px" }}>
              <Box
                sx={{
                  width: "356px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "64px",
                      fontWeight: "400",
                      lineHeight: "80px",
                    }}
                  >
                    Adventure Voyage Wandering
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "400px",
                      lineHeight: "27px",
                      color: "rgba(37, 37, 37, 1)",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget. Et
                    integer facilisi.{" "}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      width: "177px",
                      height: "66px",
                      borderRadius: "36px",
                      bgcolor: "rgba(69, 125, 97, 1)",
                      gap: "10px",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box sx={{ paddingTop: "70px" }}>
                  <img
                    src="src/assets/Aventuresection/AdventuresectionSection1.png"
                    alt="Adventure1"
                  />
                </Box>
                <Box>
                  <img
                    src="src/assets/Aventuresection/AdventureSection2.png"
                    alt="Adventure2"
                  />
                </Box>
              </Box>
            </Box>
            {/* Box2222222222222 */}
            <Box sx={{ width: "356px", position:"relative" }}>
            <Box sx={{position:"absolute", right:"400px", top:"80px"}}>
                <img src="src/assets/Aventuresection/Star 3AdventureSection6.png" alt="" />
              </Box>
              <Box sx={{position:"absolute", top:"127px", right:"-36px"}}>
                <img src="src/assets/Aventuresection/GroupAdventureSection7.png" alt="" />
              </Box>
              <Box sx={{position:"relative", top:"190px"}}>
                <img
                  src="src/assets/Aventuresection/Adventuresection3.png"
                  alt="Adventure3"
                />
              </Box>
            </Box>
            {/* Box33333333 */}
            <Box sx={{ width: "390px", display:"grid", gap:"80px", position:"relative" }}>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box>
                  <img
                    src="src/assets/Aventuresection/Adventuresection4.png"
                    alt="Adventure4"
                    width={"auto"}
                  />
                </Box>
                <Box sx={{ paddingTop: "70px" }}>
                  <img
                    src="src/assets/Aventuresection/Adventuresection5.png"
                    alt="Adventure5"
                    width={"auto"}
                  />
                </Box>
              </Box>
              <Box sx={{position:"absolute", top:"342px", right:"250px"}}>
                <img src="src/assets/Aventuresection/Star 3AdventureSection6.png" alt="" />
              </Box>
              <Box sx={{display:"grid", gap:"30px"}}>
               <Box>
               <Typography
                  sx={{
                    width: "356px",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "27px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi
                </Typography>
               </Box>
               <Box>
               <Typography sx={{fontSize:"64px", fontWeight:"400", lineHeight:"84px"}}>Trave Explore Discover</Typography>
               </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default AdventureSection;

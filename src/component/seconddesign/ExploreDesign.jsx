import { Container, Box, Typography, Button, Avatar } from "@mui/material";

const ExploreDesign = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box sx={{ width: "637px", height: "477px", padding: "20px" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "72px",
                    lineHeight: "88px",
                    fontWeight: "800",
                  }}
                >
                  Discover.
                  <br />
                  <span>Explore.</span>
                  <br />
                  <span>Inspire.</span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    width: "519px",
                    height: "99px",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    color: "rgba(37, 37, 37, 0.8)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget diam.
                </Typography>
              </Box>
              <Box>
                <Button
                  size="large"
                  sx={{
                    bgcolor: "rgba(37, 37, 37, 1)",
                    color: "white",
                    borderRadius: "50px",
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", right: "420px" }}>
                <img
                  src="src/assets/ExploreDesign/shape waveExploredesign4.png"
                  alt=""
                />
              </Box>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Box sx={{ position: "relative", top: "200px" }}>
                  <img
                    src="src/assets/ExploreDesign/Exploredesign2.png"
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src="src/assets/ExploreDesign/Exploredesign1.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* box2 */}
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "570px",
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box>
                <img
                  src="src/assets/ExploreDesign/Spiral Exploredesign2.png"
                  alt=" Exploredesign2"
                />
              </Box>
              <Box
                sx={{ position: "relative", bottom: "100px", right: "10px" }}
              >
                <img
                  src="src/assets/ExploreDesign/Exploredesign3.png"
                  alt=" Exploredesign2"
                />
              </Box>
              <Box
                sx={{ position: "absolute", bottom: "320px", left: "457px" }}
              >
                <img
                  src="src/assets/ExploreDesign/DawnExploredesign1.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box
              width={"670px"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "20px",
                position:"relative"
              }}
            >
              <Box>
                <Avatar
                  sx={{ width: "54px", height: "54px" }}
                  alt="Cindy Baker"
                  src="src/assets/ExploreDesign/Exploredesignavatar.png"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "400",
                    lineHeight: "30px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget diam.
                </Typography>
              </Box>
              <Box sx={{position:"absolute", bottom:"290px", left:"400px"}}>
                <img src="src/assets/ExploreDesign/DawnExploredesign1.png" alt="" height={200} width={200} />
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default ExploreDesign;

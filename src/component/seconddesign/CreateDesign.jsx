import { Container, Box, Typography, Button } from "@mui/material";
const CreateDesign = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Box sx={{ width:"100%", display: "flex",  }}>
            <Box width={"33%"} sx={{ position: "relative" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                    color: "rgba(37, 37, 37, 0.45)",
                  }}
                >
                  01
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    color: "rgba(37, 37, 37, 0.8)",
                    width:"500px"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus.
                </Typography>
              </Box>
              <Box>
                <img src="src/assets/CreateDesign/Creatdesign1.png" alt="" />
              </Box>
              <Box
                sx={{ position: "absolute", bottom: "412px", left: "311px" }}
              >
                <img
                  src="src/assets/CreateDesign/starCreateDesign3.png"
                  alt=""
                  width={155}
                  height={220}
                />
              </Box>
              <Box>
                <img src="src/assets/CreateDesign/CreateDesign2.png" alt="" />
              </Box>
            </Box>
            {/* Box2222222222222 */}
            <Box
              width={"33%"}
              sx={{ paddingTop: "180px", position: "relative" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "-10",
                  zIndex: "-2",
                }}
              >
                <img
                  src="src/assets/CreateDesign/Gradient bgcreatdesignbackground.png"
                  alt=""
                  height={800}
                  width={700}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "112px",
                      fontWeight: "400",
                      lineHeight: "108px",
                      width:"400px"
                    }}
                  >
                    <span>Create</span>
                    <br />
                    <span> your</span>
                    <br />
                    <span>design</span>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "400",
                      lineHeight: "32px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    size="large"
                    sx={{
                      bgcolor: "rgba(37, 37, 37, 1)",
                      borderRadius: "50px",
                      color: "white",
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* Box333333333 */}
            <Box width={"33%"} sx={{position:"relative"}}>
              <Box>
                <img src="src/assets/CreateDesign/Createdesign4.png" alt="" />
              </Box>
              <Box sx={{position:"absolute", bottom:"101px"}}>
                <img src="src/assets/CreateDesign/StarCreateDesign6.png" alt="" height={250} width={150} />
              </Box>
              <Box sx={{ textAlign: "end", paddingRight:"90px" }}>
                <img
                  src="src/assets/CreateDesign/PartyCreatDesign5.png"
                  alt=""
                />
              </Box>
              <Box>
                <Typography  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                    color: "rgba(37, 37, 37, 0.45)",
                  }}> 02</Typography>
                <Typography   sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    color: "rgba(37, 37, 37, 0.8)",
                    width:"440px"
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default CreateDesign;

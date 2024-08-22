import { Container, Box, Typography, Button } from "@mui/material";
const HeartDesign = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl" sx={{ marginTop: "160px" }}>
          <Box width={"100%"} sx={{ display: "flex" }}>
            <Box width={"50%"} sx={{paddingTop:"110px"}}>
              <Box
                sx={{
                  width: "568px",
                  height: "418px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      width: "568px",
                      height: "168px",
                      fontSize: "64px",
                      fontWeight: "700",
                      lineHeight: "84px",
                    }}
                  >
                    Listen to yourself Follow your heart
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      width: "568px",
                      height: "108px",
                      fontSize: "24px",
                      fontWeight: "300",
                      lineHeight: "36px",
                      color: "rgba(44, 16, 1, 1)",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget. Et
                    integer facilisi eget.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      bgcolor: "rgba(255, 222, 129, 1)",
                      color: "rgba(44, 16, 1, 1)",
                      borderRadius: "50px",
                    }}
                  >
                    Download the App
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  bgcolor: "rgba(73, 52, 47, 1)",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: "600",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    4.9
                  </Typography>
                  <Typography
                    sx={{
                      width: "110px",
                      height: "48px",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Lorem ipsum dolor amet
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: "600",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    4.9
                  </Typography>
                  <Typography
                    sx={{
                      width: "110px",
                      height: "48px",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Lorem ipsum dolor amet
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: "600",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    4.9
                  </Typography>
                  <Typography
                    sx={{
                      width: "110px",
                      height: "48px",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Lorem ipsum dolor amet
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* box222222222222 */}
            <Box
              width={"50%"}
              sx={{
               
                display: "flex",
                justifyContent: "center",
                position:"relative"
              }}
            >
              <Box>
                <img
                  src="src/assets/HeartDesign/Heartdesign1.png"
                  alt="heartdesign1"
                  height={"552px"}
                  width={"473px"}
                />
              </Box>
              <Box sx={{position:"absolute", top:"1px", left:"75px"}}>
                <img src="src/assets/HeartDesign/bg yellowHeartDesign2.png" alt="" width={"360"} height={"450"}/>
              </Box>
              <Box sx={{position:"absolute", left:"20px",top:"-35px"}}>
                <img src="src/assets/HeartDesign/Star 1heartdesign5.png" alt="" width={100} height={100} />
              </Box>
              <Box sx={{position:"absolute", top:"140px", left:"140px"}}>
                <img src="src/assets/HeartDesign/heartdesign3.png" alt="" width={"280"} height={"280"}/>
              </Box>
              <Box sx={{position:"absolute", top:"209px", left:"50px" }}>
                <img src="src/assets/HeartDesign/HeartDesign4.png" alt="" width={"380"} height={"480"}/>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default HeartDesign;

import { Container, Box, Typography, Button } from "@mui/material";
const InteriorDesign = () => {
  return (
    <>
      <div>
        <Container
          maxWidth="xl"
          sx={{
            background:
              "linear-gradient(to right, rgba(200, 204, 207, 1), rgba(151, 163, 163, 1))",
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginBottom:"50px"
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ maxWidth: "700px", zIndex: "1" }}>
                <Typography
                  sx={{
                    fontSize: "88px",
                    fontWeight: "800",
                    lineHeight: "104px",
                    color:"rgba(54, 56, 48, 1)"
                  }}
                >
                  Interior design
                </Typography>
                <Typography
                  sx={{
                    maxWidth: "650px",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "36px",
                    color: "rgba(54, 56, 48, 1)",
                    marginBottom: "10px",
                  }}
                  className="Typowebherosection"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget.
                </Typography>
                <Box>
                  <Button
                    sx={{
                      background: "rgba(54, 56, 48, 1)",
                      borderRadius: "60px",
                      color: "rgba(255, 255, 255, 1)",
                      paddingInline:"30px",
                      paddingBlock:"15px",
                      fontSize:"24px"
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
              <Box sx={{ position: "absolute", top: "0", right: "20px" }}>
                <img
                  src="src/assets/Interiordesign/Interiordesign1.png"
                  alt="interiordesign1"
                  width={"437px"}
                  height={"412px"}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box sx={{ position: "absolute", left:"20px"  }}>
              <img
                src="src/assets/Interiordesign/interiordesign2 (1).png"
                alt="interiordesign2"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "550px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                maxWidth={"1048px"}
                sx={{
                  
                  zIndex: "1",
                  display: "flex",
                  gap: "20px",
                  padding: "30px",
                  borderRadius: "100px",
                  background:"linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.18))",
                  
                }}
              >
                <Box width={"280px"} >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "36px",
                      color: "rgba(54, 56, 48, 1)",
                    }}
                  >
                    5.8
                  </Typography>
                  <Box sx={{height:"3px", width:"40px" ,background:"rgba(54, 56, 48, 1)"}}></Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(54, 56, 48, 1)",
                      maxWidth:"250px"
                    }}
                    className="Typowebherosection"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget.
                  </Typography>
                </Box>
                <Box width={"280px"}>
                  <Typography  sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "36px",
                      color: "rgba(54, 56, 48, 1)",
                    }}>99+</Typography>
                     <Box sx={{height:"3px", width:"40px" ,background:"rgba(54, 56, 48, 1)"}}></Box>
                  <Typography   sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(54, 56, 48, 1)",
                       maxWidth:"250px"
                    }}
                    className="Typowebherosection"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget.
                  </Typography>
                </Box>
                <Box width={"280px"}>
                  <Typography  sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "36px",
                      color: "rgba(54, 56, 48, 1)",
                    }}>110K</Typography>
                    <Box sx={{height:"3px", width:"40px" ,background:"rgba(54, 56, 48, 1)"}}></Box>
                  <Typography   sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(54, 56, 48, 1)",
                       maxWidth:"250px"
                    }}
                    className="Typowebherosection"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in libero risus semper habitant arcu eget.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default InteriorDesign;

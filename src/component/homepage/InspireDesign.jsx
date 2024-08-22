import { Container, Box, Typography, Button } from "@mui/material";
const InspireDesign = () => {
  return (
    <>
      <div>
        <Container
          maxWidth="xl"
          sx={{
            background: "rgba(47, 47, 47, 1)",
            display: "flex",
            justifyContent: "space-evenly",
            padding:"40px"
          }}
        >
          <Box
            sx={{
              width: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              paddingTop:"60px"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "72px",
                  fontWeight: "700",
                  lineHeight: "108px",
                }}
              >
                <Box sx={{ color: "pink" }}>Design.</Box>
                <Box sx={{ color: "aqua" }}>Create.</Box>
                <Box sx={{ color: "aqua" }}>Inspire</Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "36px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget.
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  background: "white",
                  color: "black ",
                  borderRadius: "50px",
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              maxWidth: "800px",
            }}
          >
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign1.png"
                alt="inspire1"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign2.png"
                alt="inspire2"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign3.png"
                alt="inspire3"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign4.png"
                alt="inspire4"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign5.png"
                alt="inspire5"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign6 (1).png"
                alt="inspire6"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign7.png"
                alt="inspire7"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign8.png"
                alt="inspire8"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign9.png"
                alt="inspire9"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign10.png"
                alt="inspire10"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign11.png"
                alt="inspire11"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign12.png"
                alt="inspire12"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign16.png"
                alt="inspire16"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign13.png"
                alt="inspire13"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign14.png"
                alt="inspire14"
              />
            </Box>
            <Box>
              <img
                src="src/assets/inspiredesign/inspiredesign15.png"
                alt="inspire15"
              />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default InspireDesign;

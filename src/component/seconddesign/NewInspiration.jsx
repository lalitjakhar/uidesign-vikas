import { Container, Box, Typography, Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
const NewInspiration = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl" sx={{marginBottom:"50px"}}>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
              height: "550px",
              paddingTop: "70px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Box>
                <Typography
                  sx={{
                    width: "600px",
                    height: "176px",
                    fontSize: "72px",
                    fontWeight: "800",
                    lineHeight: "88px",
                  }}
                >
                  New designs New inspirations
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    width: "586px",
                    height: "108px",
                    fontSize: "26px",
                    lineHeight: "35px",
                    fontWeight: "400",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box>
                <img
                  src="src/assets/Newinspression/newinspression1.png"
                  alt="newinspression1"
                />
              </Box>
              <Box sx={{ position: "absolute", left: "200px", top: "100px" }}>
                <img
                  src="src/assets/Newinspression/newinspression2.png"
                  alt="newinspression2"
                />
              </Box>
            </Box>
          </Box>
          <Box width={"100%"} sx={{ bgcolor: "rgba(37, 37, 37, 1)", display:"flex", borderRadius:"50px",justifyContent:"center", paddingTop:"20px", paddingBottom:"20px"}}>
            <Box width={400}>
              <Box sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <CloudIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "800",
                  lineHeight: "43px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Title 1
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
            <Box width={400}>
              <Box sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <CloudIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "800",
                  lineHeight: "43px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Title 1
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
            <Box width={400}>
              <Box sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <CloudIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "800",
                  lineHeight: "43px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Title 1
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default NewInspiration;

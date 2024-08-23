import { Container, Box, Typography, Button } from "@mui/material";
const AdventureSection = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Box
            sx={{ width: "356px",display:"flex", flexDirection:"column", gap:"32px"}}
          >
            <Box>
              <Typography
                sx={{ fontSize: "64px", fontWeight: "400", lineHeight: "80px" }}
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
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi.{" "}
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
          <Box></Box>
          <Box></Box>
        </Container>
      </div>
    </>
  );
};

export default AdventureSection;

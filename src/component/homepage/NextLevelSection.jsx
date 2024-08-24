import { Container, Box, Typography, Button } from "@mui/material";
const NextLevelSection = () => {
  return (
    <>
      <Container
        className="Nextlevelcontent"
        maxWidth="xl"
        sx={{
          background: "rgba(156, 32, 4, 1)",
          position: "relative",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "900px" }}>
          <Box
            sx={{
              height: "656px",
              width: "656px",
              position: "relative",
              top: "30px",
            }}
          >
            <img
              src="src/assets/Nextlevelsection/nextlevelsection4.png"
              alt=""
              height={"656"}
              width={"656"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              width: "250px",
              height: "250px",
            }}
          >
            <img
              src="src/assets/Nextlevelsection/patternnextlevelsection1.png"
              alt="petern1"
              height={"224"}
              width={"224"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "120px",
              left: "457px",
              height: "250px",
              width: "250px",
            }}
          >
            <img
              src="src/assets/Nextlevelsection/patternnextlevelsection2.png"
              alt="peturn2"
              height={"224"}
              width={"224"}
            />
          </Box>
          <Box
            sx={{
              height: "795px",
              width: "618px",
              position: "absolute",
              top: "70px",
            }}
          >
            <img
              src="src/assets/Nextlevelsection/nextlevelsection3.png"
              alt="nextlevelimg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
        <Box width={"487px"} height={"674px"} sx={{ paddingTop: "60px" }}>
          <Box sx={{display:"grid", gap:"40px"}}>
            <Box>
            <Typography
              sx={{
                fontSize: "88px",
                lineHeight: "104px",
                fontWeight: "700",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Take your designs to the next level
            </Typography>
            </Box>
            <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "300px",
                lineHeight: "32px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu.
            </Typography>
            </Box>
         
          <Box>
            <Button
             sx={{
              background: "rgba(229, 185, 75, 1)",
              paddingRight:" 40px",
              paddingLeft:"40px",
              borderRadius:"36px",
              paddingTop:"25px",
              paddingBottom:"25px",
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
        </Box>
      </Container>
    </>
  );
};
export default NextLevelSection;

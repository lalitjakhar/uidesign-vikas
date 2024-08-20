import { Container, Typography, Box } from "@mui/material";
const ExpressDesign = () => {
  return (
    <>
      <Container >
        <Box className="Expressway" sx={{marginBottom:"50px"}}>
          <Typography
            sx={{
              width: "883px",
              height: "176px",
              fontSize: "72px",
              lineHeight: "88px",
              fontWeight: "800",
              left: "64",
              top: "64",
            }}
          >
            Design is the way how you express the feelings
          </Typography>
        </Box>
        <Box className="ExpressDesigncontent" sx={{display:"flex", width:"100%", justifyContent:"space-between" }}>
        <Box sx={{ width: "23%", height: "559px", display:"flex", flexDirection:"column" ,gap:"24px" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                color: "rgba(37, 37, 37, 0.55)",
                lineHeight: "54px",
                fontWeight: "800",
              }}
            >
              01
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "32px",
                color: "rgba(37, 37, 37, 0.8)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box>
            <img src="src/assets/expressdesign/expressdesign1.png" alt="" width={"100%"} />
          </Box>
        </Box>
        <Box sx={{ width: "23%", height: "559px", display:"flex", flexDirection:"column" ,gap:"24px" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                color: "rgba(37, 37, 37, 0.55)",
                lineHeight: "54px",
                fontWeight: "800",
              }}
            >
              01
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "32px",
                color: "rgba(37, 37, 37, 0.8)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box>
            <img src="src/assets/expressdesign/expressdesign2.png" alt=""  width={"100%"}/>
          </Box>
        </Box>
        <Box sx={{ width: "23%", height: "559px", display:"flex", flexDirection:"column" ,gap:"24px" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                color: "rgba(37, 37, 37, 0.55)",
                lineHeight: "54px",
                fontWeight: "800",
              }}
            >
              01
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "32px",
                color: "rgba(37, 37, 37, 0.8)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box>
            <img src="src/assets/expressdesign/expressdesign3.png" alt="" width={"100%"} />
          </Box>
        </Box>
        <Box sx={{ width: "23%", height: "559px", display:"flex", flexDirection:"column" ,gap:"24px"  }}>
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                color: "rgba(37, 37, 37, 0.55)",
                lineHeight: "54px",
                fontWeight: "800",
              }}
            >
              01
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "32px",
                color: "rgba(37, 37, 37, 0.8)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box>
            <img src="src/assets/expressdesign/expressdesign4.png" alt="" width={"100%"} />
          </Box>
        </Box>
        </Box>
      </Container>
    </>
  );
};
export default ExpressDesign;

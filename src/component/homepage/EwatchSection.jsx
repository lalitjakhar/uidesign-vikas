import { Container, Typography, Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import StarsIcon from '@mui/icons-material/Stars';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LanguageIcon from '@mui/icons-material/Language';
const EwatchSection = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl" sx={{ height: "900px", display: "flex", marginTop:"50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Box>
              <img
                src="src/assets/Ewatchsection/ewatch logo1.png"
                alt="Ewatchlogo"
                width={"101"}
                height={"101"}
              />
            </Box>
            <Box>
              <Typography
             
                sx={{ fontSize: "64px", fontWeight: "700", lineHeight: "80px", fontFamily:"fangsong" }}
              >
                THE eWatch with the newest microchip technology
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "rgba(51, 51, 51, 1)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget diam.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button sx={{ background: "rgba(5, 5, 5, 1)", color: "white", fontSize:"24px", borderRadius:"16px",paddingInline:"24px" }}>
                Order now
              </Button>
              <Button sx={{ border: "1px solid black", color: "black" ,fontSize:"24px", borderRadius:"16px",paddingInline:"24px"  }}>
                Explore more
              </Button>
            </Box>
            <Box sx={{ border: "2px solid black", width: "600px", display:"flex", justifyContent:"space-between", padding:"20px", borderRadius:"20px", marginTop:'70px' }}>
              <Box width={100}>
                <LightModeIcon />
                <Typography sx={{fontSize:"16px", fontWeight:"400", lineHeight:"18px"}}>Lorem ipsu dolor amet</Typography>
              </Box>
              <Box width={100}>
                <StarsIcon />
                <Typography sx={{fontSize:"16px", fontWeight:"400", lineHeight:"18px"}}>Lorem ipsu dolor amet</Typography>
              </Box>
              <Box width={100}>
                <RemoveRedEyeIcon />
                <Typography sx={{fontSize:"16px", fontWeight:"400", lineHeight:"18px"}}>Lorem ipsu dolor amet</Typography>
              </Box>
              <Box width={100}>
                < LanguageIcon />
                <Typography sx={{fontSize:"16px", fontWeight:"400", lineHeight:"18px"}}>Lorem ipsu dolor amet</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box
              sx={{
                width: "480px",
                height: "568px",
                position: "relative",
                top: "70px",
              }}
            >
              <img
                src="src/assets/Ewatchsection/ewatchsection2.png"
                alt=""
                width={"480"}
                height={"568"}
              />
            </Box>
            <Box sx={{ position: "absolute", bottom: "100px", left: "261px" }}>
              <img src="src/assets/Ewatchsection/ewatch4.png" alt="" />
            </Box>
            <Box sx={{ position: "absolute", top: "20px", left: "-30px" }}>
              <img src="src/assets/Ewatchsection/Starewatch3.png" alt="" />
            </Box>
            <Box sx={{ position: "absolute", bottom: "150px", left: "70px" }}>
              <img
                src="src/assets/Ewatchsection/ewatch5.png"
                alt=""
                height={"600"}
              />
            </Box>
            <Box sx={{ position: "absolute", top: "208px", left: "130px" }}>
              <img src="src/assets/Ewatchsection/Starewatch6.png" alt="" />
            </Box>
            <Box sx={{ position: "absolute", top: "550px", left: "350px" }}>
              <img src="src/assets/Ewatchsection/starewatch7.png" alt="" />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default EwatchSection;

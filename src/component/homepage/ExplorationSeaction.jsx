import {  Box,Typography,Button } from "@mui/material";
const ExplorationSeaction = () => {
  return (
    <>
      <Box sx={{display:"flex", gap:"50px", marginTop:"70px", marginRight:"0",}}>
        <Box marginRight={"0"}>
          <img
            src="src/assets/ImageExloration1.png"
            alt=""
            width={"100%"}
            height={"auto"}
          />
        </Box>
        <Box maxWidth={"500px"}>
           <Box >
           <Typography fontSize={"64px"} lineHeight={"80px" }>
            Exploration and inspiration
            </Typography>
           </Box>
           <Box>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
            </Typography>
           </Box>
           <Box 
          >
            <Button variant="Contant" sx={{background:"#252525", color:"white"}}>Explore</Button>
           </Box>
        </Box>
      </Box>
    </>
  );
};
export default ExplorationSeaction;

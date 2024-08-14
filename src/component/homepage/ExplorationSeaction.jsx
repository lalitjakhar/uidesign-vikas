import { Container, Box,Typography,Button } from "@mui/material";
const ExplorationSeaction = () => {
  return (
    <>
      <Container sx={{display:"flex", gap:"50px"}}>
        <Box>
          <img
            src="src/assets/ImageExloration1.png"
            alt=""
            width={"100%"}
            height={"auto"}
          />
        </Box>
        <Box>
           <Box>
           <Typography>
            Exploration and inspiration
            </Typography>
           </Box>
           <Box>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
            </Typography>
           </Box>
           <Box>
            <Button>Explor</Button>
           </Box>
        </Box>
      </Container>
    </>
  );
};
export default ExplorationSeaction;

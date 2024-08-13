import { Box, Typography, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
];

const HeroSection = () => {
  return (
    <>
      <div>
        <Box className="container">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "650px",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "600", fontSize: "64px", lineHeight: "80px" }}
              >
                Discover the beauty around the world
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                sx={{ color: "#252525", fontSize: "26px", lineHeight: "35px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget diam.
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" sx={{ background: "#252525" }}>
                Explore
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
      <Box className="container-lg">
        <ImageList sx={{}} cols={12}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={3}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};
export default HeroSection;

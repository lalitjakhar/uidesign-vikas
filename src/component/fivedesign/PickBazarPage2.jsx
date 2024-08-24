import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const PickBazarPage2 = () => {
  return (
    <>
      <div>
        <Box>
          <Box>
            <img
              src="src/assets/pickbazarpage2/shop-fallback-cover-photo.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top:"-150px", left:"100px" }}>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src="src/assets/pickbazarpage2/Untitled-2024-02-02-2144.webp"
                  sx={{
                    width: 256,
                    height: 256,
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default PickBazarPage2;

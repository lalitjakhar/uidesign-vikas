import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const PracticeSeaction = () => {
  return (
    <>
      <Container>
      <Box className="PracticSection1">
      <Typography 
          sx={{
            fontSize: "88px",
            lineHeight: "104px",
            fontWeight: "800px",
            width: "531px",
            height: "208px",
            color: " rgba(37, 37, 37, 1)",
            top: "64px",
            left: "64px",
          }}
        >
          Projects and practice
        </Typography>
      </Box>
        <Box className="PracticeSeaction" sx={{ display: "flex", justifyContent: "space-between", width:"100%"}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "30%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "800",
                  color: "rgba(37, 37, 37, 0.55)",
                  width: "35px",
                  height: "45px",
                }}
              >
                01
              </Typography>

              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeightStep: "32px",
                  fontWeight: "400px",
                  color: "rgba(37, 37, 37, 0.8)",
                  height: "120px",
                  width: "370px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget.
              </Typography>
            </Box>
            <Box>
              <img
                src="src/assets/practicsection/practic1.png"
                alt="practic1"
                width={"370"}
                height={"345"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "30%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "800",
                  color: "rgba(37, 37, 37, 0.55)",
                  width: "35px",
                  height: "45px",
                }}
              >
                01
              </Typography>

              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeightStep: "32px",
                  fontWeight: "400px",
                  color: "rgba(37, 37, 37, 0.8)",
                  height: "120px",
                  width: "370px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget.
              </Typography>
            </Box>
            <Box>
              <img
                src="src/assets/practicsection/practic2.png"
                alt="practic1"
                width={"370"}
                height={"345"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "30%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "800",
                  color: "rgba(37, 37, 37, 0.55)",
                  width: "35px",
                  height: "45px",
                }}
              >
                01
              </Typography>

              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeightStep: "32px",
                  fontWeight: "400px",
                  color: "rgba(37, 37, 37, 0.8)",
                  height: "120px",
                  width: "370px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget.
              </Typography>
            </Box>
            <Box>
              <img
                src="src/assets/practicsection/practic3.png"
                alt="practic1"
                width={"370"}
                height={"345"}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PracticeSeaction;

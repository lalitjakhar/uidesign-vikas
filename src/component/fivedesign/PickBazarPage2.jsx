import { Box, Container, Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
const PickBazarPage2 = () => {
  return (
    <>
      <div>
        <Box sx={{ bgcolor: "#f3f4f6", paddingBottom:"50px" }}>
          <Box>
            <img
              src="src/assets/pickbazarpage2/shop-fallback-cover-photo.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ position: "relative", height: "150px" }}>
            <Box sx={{ position: "absolute", top: "-150px", left: "100px" }}>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src="src/assets/pickbazarpage2/Untitled-2024-02-02-2144.webp"
                  sx={{
                    width: 256,
                    height: 256,
                    border: "1px solid red",
                  }}
                />
              </Stack>
            </Box>
          </Box>
          <Container maxWidth="lg">
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                fsdfsdf
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography>@</Typography>
                <Typography>admin@demo.com</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderLeft: "1px solid black",
                  paddingLeft: "40px",
                  borderColor: "rgb(235 235 235 )",
                }}
              >
                <LocationOnIcon />
                <Typography>
                  sdfsdf, dsfdf, sdfsdf, dsffsd,<br></br> sdfsdfsdf
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  borderLeft: "1px solid black",
                  paddingLeft: "40px",
                  borderColor: "#d4d2cd",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box>
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography>
                      +53<br></br> 453453455
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    sx={{
                      bgcolor: "#009f7f",
                      color: "white",
                      borderRadius: "50px",
                    }}
                  >
                    Edit shop
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "#009f7f",
                      color: "white",
                      borderRadius: "50px",
                    }}
                  >
                    Transfer Ownersship
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "50px",
                display: "flex",
                width: "100%",
                gap: "40px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: "30%",
                  padding: "50px",
                  borderRadius: "10px",
                  bgcolor: "white",
                }}
              >
                <Box sx={{paddingBottom:"40px"}}>
                  <Typography sx={{ color: "#666666" }}>
                    Registered Since
                  </Typography>
                  <Typography sx={{ color: "#111111" }}>
                    August 20, 2024
                  </Typography>
                </Box>
           
                <Box>
                  <Typography sx={{ color: "#111111" }}>
                    Payment Information
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#666666" }}>Name</Typography>
                  <Typography sx={{ color: "#111111" }}>fsdfsdfsdf</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#666666" }}>Email</Typography>
                  <Typography sx={{ color: "#111111" }}>
                    dsfdfsdf@sdfjk.sdf
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#666666" }}>Bank</Typography>
                  <Typography sx={{ color: "#111111" }}>sfdfSDF</Typography>
                </Box>
                <Box>
                  <Typography>Account No.</Typography>
                  <Typography sx={{ color: "#111111" }}>
                    543534534535
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  bgcolor: "white",
                  width: "50%",
                  borderRadius: "10px",
                  padding: "50px",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid black",
                      alignItems: "center",
                      width: "226px",
                      height: "100px",
                      padding: "10px",
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{fontSize:"24px", color:"#111111", fontFamily:"sans-serif"}}>0</Typography>
                      <Typography sx={{fontSize:"14px", color:"#333333"}}>Total Products</Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        border: "1px solid #7fa3f0",
                        padding: "10px",
                        borderRadius: "9999px",
                        borderWidth: "3px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",
                        height: "30px",
                        bgcolor:"rgb(244 239 255)"
                      }}
                    >
                      <svg
                        color="#7fa3f0"
                        fontSize="1.875rem"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.266 21.516l-2.767.914.864-1.203a1.9 1.9 0 00.354-.96h2.15A2.133 2.133 0 0032 18.133V4.155h-.005c0-.182-.04-.361-.12-.524L30.385.65A1.169 1.169 0 0029.333 0h-12.8a1.17 1.17 0 00-1.052.65l-1.49 2.98c-.08.164-.12.343-.119.525h-.005V16.74l-4.346.276a4.655 4.655 0 00-2.14.673l-3.472 2.12a3.573 3.573 0 01-1.86.523H1.6A1.612 1.612 0 000 21.952v4.574A1.61 1.61 0 001.22 28.1l15.26 3.764a4.655 4.655 0 003.307-.41l11.08-6.006a2.142 2.142 0 00-.064-3.813 2.114 2.114 0 00-1.537-.12zM26.5 20.6L24.776 23l-4.883 1.613 4.468-4.347h2.288a.858.858 0 01-.149.334zm-7.968-3.534a1.958 1.958 0 00-1.454-.53h-.011v-1.604H20.8v2.134h-2.268zm-.251 3.2h4.55l-4.955 4.822-4.754-1.76a.316.316 0 01-.192-.358l.284-1.445a.301.301 0 01.227-.242l4.192-.739c.23-.054.45-.148.648-.278zm11.15-19.14l1.49 2.98a.11.11 0 01-.098.16h-4.274l-.8-3.2h3.584a.111.111 0 01.098.06zm-9.164 4.206H25.6v4.665l-.542-.541a.74.74 0 00-1.049 0l-1.076 1.075-1.075-1.075a.74.74 0 00-1.049 0l-.542.541V5.333zm.15-1.066l.8-3.2h3.434l.8 3.2h-5.034zm-5.471-.16l1.49-2.981a.111.111 0 01.097-.06h3.584l-.8 3.2h-4.273a.11.11 0 01-.098-.16zm-.013 1.212c.038.004.073.014.11.014H19.2v5.45a.741.741 0 001.266.524l.867-.867 1.076 1.076a.742.742 0 001.049 0l1.075-1.075.866.866a.742.742 0 001.268-.524v-5.45h4.156c.038 0 .073-.01.11-.014v12.814a1.067 1.067 0 01-1.066 1.067H19.093c.11-.333.134-.689.068-1.033 0-.012-.007-.023-.01-.034H20.8a1.067 1.067 0 001.067-1.066v-2.134a1.067 1.067 0 00-1.067-1.066h-3.733A1.067 1.067 0 0016 14.933v1.672l-1.067.068V5.32zm15.431 19.19l-11.086 6.005a3.596 3.596 0 01-2.545.315L1.476 27.064a.546.546 0 01-.41-.538v-4.574A.543.543 0 011.6 21.4h.45c.852 0 1.688-.236 2.415-.68l3.472-2.121a3.592 3.592 0 011.65-.518l7.555-.481a.952.952 0 01.973.77.967.967 0 01-.694 1.129l-4.176.735a1.368 1.368 0 00-1.079 1.085l-.283 1.445a1.373 1.373 0 00.869 1.563l4.935 1.828c.283.103.592.11.878.02L29.59 22.53a1.029 1.029 0 011.267.623 1.078 1.078 0 01-.493 1.355z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid black",
                      alignItems: "center",
                      width: "226px",
                      height: "100px",
                      padding: "10px",
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{fontSize:"24px", color:"#111111", fontFamily:"sans-serif"}}>0%
                      </Typography>
                      <Typography sx={{fontSize:"14px", color:"#333333"}}>Admin Commission...</Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        border: "3px solid #ed2839",
                        padding: "10px",
                        borderRadius: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",
                        height: "30px",
                        bgcolor:"rgb(244 239 255)"
                      }}
                    >
                      <svg
                        color="#ed2839"
                        fontSize="1.875rem"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.77 1.646a.5.5 0 01.707 0l5.5 5.5a.5.5 0 01-.354.854h-2.75v2.5a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5h2.043l-4.293-4.293L8.83 7h2.168a.5.5 0 01.5.5v7.125a.5.5 0 01-1 0V8H7.623a.5.5 0 01-.353-.854l5.5-5.5zm7.478 6.729a.5.5 0 01.354.146l7.125 7.125a.5.5 0 01-.354.854h-3.875v6.875a.5.5 0 01-1 0V16a.5.5 0 01.5-.5h3.168l-5.918-5.918L14.33 15.5h2.793a.5.5 0 01.5.5v9.5a.5.5 0 11-1 0v-9h-3.5a.5.5 0 01-.353-.854l7.125-7.125a.5.5 0 01.353-.146zM7.373 18.077a1.065 1.065 0 100 2.13 1.065 1.065 0 000-2.13zM5.31 19.14a2.065 2.065 0 114.13 0 2.065 2.065 0 01-4.13 0zm8.182-1.927a.5.5 0 01.12.697l-6.2 8.756a.5.5 0 11-.816-.578l6.2-8.756a.5.5 0 01.696-.12zm6.632.036a.5.5 0 01.5.5v5.375a.5.5 0 01-1 0V17.75a.5.5 0 01.5-.5zm-7.189 6.728a1.065 1.065 0 100 2.13 1.065 1.065 0 000-2.13zm-2.065 1.064a2.065 2.065 0 114.13 0 2.065 2.065 0 01-4.13 0zm9.254-.417a.5.5 0 01.5.5v1.75a.5.5 0 11-1 0v-1.75a.5.5 0 01.5-.5zm0 3.5a.5.5 0 01.5.5v.75a.5.5 0 11-1 0v-.75a.5.5 0 01.5-.5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid black",
                      alignItems: "center",
                      width: "226px",
                      height: "100px",
                      padding: "10px",
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{fontSize:"24px", color:"#111111", fontFamily:"sans-serif"}}>$0.00</Typography>
                      <Typography sx={{fontSize:"14px", color:"#333333"}}>Current Balance</Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        width: "30px",
                        height: "30px",
                        border: "1px solid #15199e",
                        padding: "10px",
                        borderRadius: "9999px",
                        borderWidth: "3px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor:"rgb(244 239 255)"
                      }}
                    >
                      <svg
                        color="#15199e"
                        fontSize="1.875rem"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="currentColor">
                          <path d="M30.474 18.743h-.479V14.43c0-.683-.34-1.288-.859-1.655v-.587c0-.852-.693-1.545-1.545-1.545h-.358l1.369-2.008a1.479 1.479 0 00-.39-2.052L18.93.257a1.466 1.466 0 00-1.107-.23 1.467 1.467 0 00-.945.619L8.865 12.403h-2.23l.538-5.445a.162.162 0 01.102-.136 3.466 3.466 0 001.691-1.374.16.16 0 01.152-.071l3.497.346a.456.456 0 00.09-.908L9.206 4.47a1.067 1.067 0 00-1.01.489c-.293.459-.734.818-1.244 1.01-.383.144-.647.489-.687.899l-.547 5.535h-.581l.85-8.612a.565.565 0 01.618-.507l7.067.698a.456.456 0 00.09-.908l-7.067-.698A1.479 1.479 0 005.08 3.701l-.686 6.942H3.227c-.852 0-1.545.693-1.545 1.545v.4A2.029 2.029 0 00.5 14.43v15.543C.5 31.091 1.41 32 2.527 32h25.441c1.118 0 2.027-.91 2.027-2.027V25.66h.479c.565 0 1.025-.46 1.025-1.025v-4.867c0-.565-.46-1.025-1.025-1.025zm-2.883-7.188c.35 0 .633.284.633.633v.232a2.036 2.036 0 00-.256-.017h-1.934l.578-.848h.98zm-9.96-10.396a.561.561 0 01.785-.149L27.7 7.337a.566.566 0 01.15.785l-2.919 4.281h-.7l1.43-2.099c.232-.34.252-.774.05-1.13a2.547 2.547 0 01-.305-1.574 1.066 1.066 0 00-.462-1.023l-4.812-3.28a1.066 1.066 0 00-1.121-.054 2.549 2.549 0 01-1.576.29 1.08 1.08 0 00-1.034.46l-5.731 8.41h-.7L17.63 1.16zm.201 7.743a3.763 3.763 0 00-3.748 3.501h-2.312l5.382-7.896a.163.163 0 01.154-.07 3.467 3.467 0 002.143-.396.16.16 0 01.166.01l4.813 3.28c.05.034.078.094.07.151a3.466 3.466 0 00.416 2.14.162.162 0 01-.009.168l-1.78 2.613H21.58a3.763 3.763 0 00-3.749-3.5zm2.834 3.501h-5.668a2.85 2.85 0 012.834-2.589 2.85 2.85 0 012.834 2.59zm-18.072-.215c0-.35.284-.633.633-.633h1.078l-.084.848H2.594v-.215zM1.412 14.43c0-.615.5-1.115 1.115-1.115h25.441c.615 0 1.115.5 1.115 1.115v1.265H1.412V14.43zm27.671 15.543c0 .615-.5 1.115-1.115 1.115H2.527c-.615 0-1.115-.5-1.115-1.115v-1.265H3.87a.456.456 0 100-.912H1.41V16.607h27.672v2.136h-4.335c-1.366 0-2.55.797-3.111 1.95l-.006.01-.014.03a3.438 3.438 0 00-.328 1.469 3.462 3.462 0 003.459 3.458h4.335v2.136H6.79a.456.456 0 000 .912h22.293v1.265zm1.504-5.338c0 .062-.05.113-.113.113h-5.726a2.549 2.549 0 01-2.239-3.76 2.549 2.549 0 012.239-1.333h5.726c.062 0 .113.051.113.113v4.867z"></path>
                          <path d="M24.854 20.352c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.83-1.85-1.85-1.85zm0 2.788a.94.94 0 010-1.876.94.94 0 010 1.876z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_808_1618">
                            <path fill="#fff" d="M0 0H32V32H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid black",
                      alignItems: "center",
                      width: "226px",
                      height: "100px",
                      padding: "10px",
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{fontSize:"24px", color:"#111111", fontFamily:"sans-serif"}}>0</Typography>
                      <Typography sx={{fontSize:"14px", color:"#333333"}}>Total Orders</Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        border: "3px solid rgb(255 141 41)",
                        padding: "10px",
                        borderRadius: "50px",
                        width:"30px",
                        height:"30px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        bgcolor:"rgb(244 239 255)"
                      }}
                    >
                      <svg
                        
                        color="rgb(255 141 41)"
                        fontSize="1.875rem"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        
                      >
                        <g fill="currentColor">
                          <path d="M23.321 30.012c-.29 0-.485.194-.485.485v.533H.97V6.06h4.897c-.243.776-.194 1.31-.194 1.843 0 .291.194.485.485.485h11.539c.29 0 .485-.194.485-.485 0-.533.048-1.067-.194-1.842h4.897v3.345c0 .291.194.485.485.485.29 0 .485-.194.485-.485v-3.83c0-.291-.194-.485-.485-.485H17.55c-.484-.873-1.26-1.552-2.23-2.036-.097-1.697-1.6-3.103-3.394-3.103S8.63 1.309 8.533 3.055c-.97.436-1.697 1.163-2.23 2.036H.485c-.291 0-.485.194-.485.485v25.94c0 .29.194.484.485.484H23.32c.291 0 .485-.194.485-.485v-1.018c0-.242-.242-.485-.485-.485zM9.164 3.83a.52.52 0 00.29-.581c0-1.261 1.067-2.28 2.425-2.28 1.357 0 2.424 1.019 2.424 2.28a.52.52 0 00.29.581 3.917 3.917 0 012.57 3.588H6.644c0-1.551 1.018-2.957 2.52-3.588z"></path>
                          <path d="M11.88 5.673c1.017 0 1.89-.824 1.89-1.891 0-1.067-.824-1.891-1.89-1.891-1.019 0-1.892.824-1.892 1.89 0 1.068.873 1.892 1.891 1.892zm0-2.812a.92.92 0 01.92.92.892.892 0 01-.92.922.92.92 0 110-1.842zM7.126 11.297c0-.29-.194-.485-.485-.485H3.344c-.29 0-.485.194-.485.485v3.54c0 .29.194.484.485.484h3.297c.291 0 .485-.194.485-.485v-3.539zm-.97 3.006H3.83v-2.57h2.327v2.57zM7.126 17.794c0-.291-.194-.485-.485-.485H3.344c-.29 0-.485.194-.485.485v3.54c0 .29.194.484.485.484h3.297c.291 0 .485-.194.485-.485v-3.54zm-.97 3.055H3.83v-2.57h2.327v2.57zM6.641 23.855H3.344c-.29 0-.485.194-.485.485v3.539c0 .29.194.485.485.485h3.297c.291 0 .485-.194.485-.485v-3.54a.486.486 0 00-.485-.484zm-.485 3.539H3.83v-2.57h2.327v2.57zM31.709 15.515l-8.825-4.8c-.145-.097-.34-.097-.436 0-.582.291-7.612 4.073-8.776 4.703a.579.579 0 00-.242.437v7.757c0 .146.097.34.242.388l8.776 5.527a.44.44 0 00.485 0l8.824-4.703a.51.51 0 00.242-.436V15.95a.518.518 0 00-.29-.436zm-9.019-3.83l7.855 4.266-2.037 1.116-7.854-4.316 2.036-1.066zm3.88 6.69l-8.146-4.411 1.163-.63 8.388 4.605v2.376l-1.164.63v-2.133c0-.194-.096-.388-.242-.436zm-9.165-3.878l7.903 4.315-2.618 1.455-7.806-4.412 2.521-1.358zm-3.054 8.776V16.63l7.806 4.413v7.175l-7.806-4.945zm8.824 4.994V21.09l2.667-1.455v2.134c0 .194.097.34.242.436a.44.44 0 00.485 0l2.133-1.163a.51.51 0 00.243-.437V17.94l2.085-1.115v7.321l-7.855 4.122zM15.903 13.043c0-.291-.194-.485-.485-.485H8.485c-.291 0-.485.194-.485.485 0 .29.194.484.485.484h6.933a.486.486 0 00.485-.484zM12.462 19.103H8.438c-.29 0-.485.194-.485.485 0 .29.194.485.485.485h4.024c.291 0 .485-.194.485-.485a.486.486 0 00-.485-.485zM7.66 26.085c0 .29.194.485.485.485h6.351c.291 0 .485-.194.485-.485s-.194-.485-.485-.485H8.145c-.242 0-.485.242-.485.485z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_811_2531">
                            <path fill="#fff" d="M0 0H32V32H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid black",
                      alignItems: "center",
                      width: "226px",
                      height: "100px",
                      padding: "10px",
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{fontSize:"24px", color:"#111111", fontFamily:"sans-serif"}}>$0.00</Typography>
                      <Typography sx={{fontSize:"14px", color:"#333333"}}>Gross Sales</Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        border: "3px solid rgb(0 170 255)",
                        padding: "10px",
                        borderRadius: "50px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        bgcolor:"rgb(244 239 255)"
                      }}
                    >
                      <svg
                       color="rgb(0 170 255)"
                        fontSize="1.875rem"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      
                      >
                        <path
                          d="M26.756 21.693c.035-.07.077-.135.109-.205 1.536-3.366-2.052-8.41-3.415-10.14a1.703 1.703 0 00-.153-3.118 3.069 3.069 0 00.745-2.019 1.715 1.715 0 00-.736-1.411c-.582-.374-1.203-.026-1.654.23-.09.052-.211.119-.32.164a2.386 2.386 0 01-.029-.43 1.92 1.92 0 00-1.008-1.807 2.173 2.173 0 00-2.144.109 1.072 1.072 0 00-.49 1.033c.036.266.148 1.072-.179 1.383-.256.246-.793.204-1.2.13-.64-.12-1.088 0-1.315.385-.352.579.09 1.507.582 2.24a1.705 1.705 0 00-.121 3.104c-.083.105-.176.224-.275.358a5.737 5.737 0 10-3.415 8.912c.06.3.154.592.279.87.054.113.112.225.176.32-.432.255-.845.54-1.236.855v-.25a.982.982 0 00-.966-.966H7.319a.982.982 0 00-.98.982v5.879a.982.982 0 00.98.979h2.672a.98.98 0 00.98-.98v-.082h3.218c1.072.227 3.35.684 4.314.684a1.52 1.52 0 00.32-.025c.157-.035.64-.144 7.971-4.64a1.491 1.491 0 00.493-2.045 1.424 1.424 0 00-.531-.5zM10.01 28.3c0 .005-.002.01-.005.013a.02.02 0 01-.014.006L7.3 28.3l.019-5.9 2.691.022v5.879zm6.106-21.76c.915.17 1.6.041 2.041-.381.612-.582.56-1.54.468-2.208 0-.045.076-.106.092-.118a1.248 1.248 0 011.15-.042.982.982 0 01.489.96c0 .486.054 1.075.483 1.328.429.253.886 0 1.28-.227.198-.112.566-.32.666-.256a.77.77 0 01.294.64 2.429 2.429 0 01-.998 1.875h-5.44c-.461-.64-.826-1.312-.842-1.6.107-.004.214.01.317.038v-.01zm.096 2.521h6.47a.755.755 0 010 1.508h-6.47a.755.755 0 010-1.508zm.019 5.978a5.74 5.74 0 00-.55-2.429c.361-.496.662-.87.828-1.072h5.863c.832 1.011 5.059 6.4 3.619 9.549a2.955 2.955 0 01-.24.413 1.572 1.572 0 00-.422.131l-3.37 1.686a1.664 1.664 0 00-1.77-1.606l-2.56.173a4.285 4.285 0 00-2.812-.912 4.5 4.5 0 00-1.754.41 2.851 2.851 0 01-.157-.295 3.25 3.25 0 01-.23-.758 5.761 5.761 0 003.555-5.29zm-5.74 4.762a4.78 4.78 0 114.78-4.762 4.8 4.8 0 01-4.78 4.762zm15.785 3.616c-4.285 2.624-7.306 4.4-7.68 4.524-.362.064-2.49-.297-4.26-.675a.498.498 0 00-.099 0H10.97v-3.485a.474.474 0 00.32-.128c.02 0 1.901-1.721 3.52-1.721 1.559 0 2.24.733 2.279.761a.48.48 0 00.393.16l2.768-.185a.701.701 0 01.397 1.305h-.026a.642.642 0 01-.153.058l-3.376.864a.479.479 0 00-.27.752.477.477 0 00.503.18l3.383-.852a1.6 1.6 0 00.403-.16l4.646-2.326a.537.537 0 01.766.395.526.526 0 01-.247.533z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.081 18.333a.48.48 0 00-.96 0 2.154 2.154 0 001.847 2.029v.361a.48.48 0 00.96 0v-.361a2.154 2.154 0 001.833-2.03 2.15 2.15 0 00-1.834-2.012v-2.214a1.148 1.148 0 01.874 1.036.48.48 0 00.96 0 2.154 2.154 0 00-1.834-2.022v-.368a.48.48 0 00-.96 0v.368a2.153 2.153 0 00-1.846 2.029 2.154 2.154 0 001.847 2.032v2.198a1.152 1.152 0 01-.887-1.046zm1.846-1.053a1.053 1.053 0 010 2.08v-2.08zm-1.846-2.138a1.148 1.148 0 01.887-1.036v2.076a1.149 1.149 0 01-.887-1.04zM10.49 12.86a.841.841 0 01.842.842.48.48 0 00.96 0 1.802 1.802 0 00-1.322-1.734v-.246a.48.48 0 00-.96 0v.246a1.799 1.799 0 000 3.469v.067l.055-.054c.14.034.282.052.425.054a.842.842 0 11-.841.838.48.48 0 10-.96 0 1.805 1.805 0 001.321 1.735v.246a.48.48 0 00.96 0v-.246a1.798 1.798 0 000-3.469v-.064l-.054.051a1.843 1.843 0 00-.426-.051.842.842 0 010-1.683z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default PickBazarPage2;

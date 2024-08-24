import { Container, Box, Typography, Select, Button } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const steps = [
  "Order Pending",
  "Order processing",
  "Order at local facility",
  "Order Out For Delivery",
  "Order Completed",
];

const PickBazarPage = () => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Container maxWidth="lg" sx={{ margin: "30px", bgcolor:"white" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "#f7f8fa",
                padding: "15px",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: "500" }}>
                  <span> Order Status : </span>
                  <span
                    style={{
                      color: "rgba(0,159,127, 1)",
                      backgroundColor: "#129f7f1a",
                      padding: "10px",
                      borderRadius: "10px",
                      fontWeight: "500",
                      marginLeft: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Processing
                  </span>
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "500" }}>
                  Pyment Status :
                  <span
                    style={{
                      color: "rgba(0,159,127, 1)",
                      backgroundColor: "#129f7f1a",
                      padding: "10px",
                      borderRadius: "10px",
                      fontWeight: "500",
                      marginLeft: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Pyment Success
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "60px",
              }}
            >
              <Box>
                <Typography>Order ID - 20231025982186</Typography>
              </Box>
              <Box>
                <Select
                  sx={{ width: "478px", height: "50px" }}
                  placeholder="Orderstatus"
                >
                  <option value="">order pending</option>
                  <hr></hr>
                  <option value="">Order processing</option>
                  <hr></hr>
                  <option value="">Order at local facility</option>
                  <hr></hr>
                  <option value="">Order Out For Delivery</option>
                  <hr></hr>
                  <option value="">Order Completed</option>
                  <hr></hr>
                  <option value="">order cancelled</option>
                </Select>
                <Button
                  sx={{
                    bgcolor: "#009f7f",
                    padding: "16px",
                    marginLeft: "10px",
                    color: "white",
                    height: "48px",
                    width: "157px",
                  }}
                >
                  Change Status
                </Button>
              </Box>
            </Box>

            <Box sx={{ width: "100%", marginTop: "100px" }}>
              <Stepper activeStep={5} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ marginTop: "50px" }}>
              <TableContainer>
                <Table sx={{ minWidth: "700px" }} aria-label="spanning table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#f9fafb" }}>
                      <TableCell
                        align="start"
                        sx={{ borderBottom: "none", fontWeight: "800" }}
                        colSpan={3}
                      >
                        Product
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ borderBottom: "none", fontWeight: "800" }}
                      >
                        Total
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="src/assets/Pickbazarpage/Children-Literature-2-thumbnail.webp"
                            alt="Product"
                            width={50}
                            height={50}
                            style={{ marginRight: "8px" }}
                          />
                          The Bedtime Stories Part Onex3
                        </Box>
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">$300.00</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={4} sx={{ borderBottom: "none" }} />
                      <TableCell colSpan={2} sx={{ borderBottom: "none" }}>
                        Subtotal
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: "none" }}>
                        $300.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} sx={{ borderBottom: "none" }}>
                        Shipping Charge
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: "none" }}>
                        $0.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} sx={{ borderBottom: "none" }}>
                        Tax
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: "none" }}>
                        $6.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        sx={{ borderBottom: "none", fontWeight: "800" }}
                      >
                        Total
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: "none" }}>
                        $306.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              width={"100%"}
              sx={{ display: "flex", justifyContent: "space-between", marginTop:"40px"}}
            >
              <Box width={"30%"}>
                <Typography
                  sx={{
                    borderBottom: "1px solid black",
                    borderColor:"#666666",
                    fontSize: "inherit",
                    fontWeight: "500",
                    paddingBottom: "3px",
                  }}
                >
                  Order Details
                </Typography>
                <Typography sx={{color:"#666666"}}>1 Item</Typography>
                <Typography sx={{color:"#666666"}}>Payment Method: CASH_ON_DELIVERY</Typography>
              </Box>
              <Box width={"30%"}>
                <Typography
                  sx={{
                    borderBottom: "1px solid black",
                    borderColor:"#666666",
                    fontSize: "inherit",
                    fontWeight: "500",
                    paddingBottom: "3px",
                  }}
                >
                  Billing Address
                </Typography>
                <Typography sx={{color:"#666666"}}>Customer</Typography>
                <Typography sx={{color:"#666666"}}>+1 9365141641631</Typography>
              </Box>
              <Box width={"30%"} sx={{textAlign:"end"}}>
                <Typography
                  sx={{
                    borderBottom: "1px solid black",
                    borderColor:"#666666",
                    fontWeight: "500",
                    paddingBottom: "3px",
                   
                  }}
                >
                  Shipping Address
                </Typography>
                <Typography sx={{color:"#666666"}}>Customer</Typography>
                <Typography sx={{color:"#666666"}}> +1 9365141641631</Typography>
              </Box>
            </Box>
          </Container>
        </Container>
      </div>
    </>
  );
};
export default PickBazarPage;

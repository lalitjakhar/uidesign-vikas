import {Box,Button ,Container,Grid} from "@mui/material"
const Demo=()=>{
    return(
<>
<div className="App">
   <h1>react mui|layout|Box</h1>
  <Box component={"span"} style={{color:"yellow"}}clone m={20}>
  <Button >Hello</Button>
  </Box>
  <Container>
  <h1>react mui|layout|Box</h1>
  </Container>
  <Grid item xs={12} container spacing={3}>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>block 1</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>block 2</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>block 3</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>block 4</h1></Grid>
  </Grid>
</div>
</>


    )
};
export default Demo;
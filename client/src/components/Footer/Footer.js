import { Box, Container, Grid } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
    <div>
        <Box
        margingTop={50}
        px={{xs: 3, sm: 10}}
        py={{xs: 5, sm: 10}} 
        bgcolor="text.secondary"
        color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit"/>
                             Home
                        </Box>
                        <Box>
                            <Link href="/" color="inherit"/>
                             Contect
                        </Box>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            <Link href="/" color="inherit"/>
                             Register
                        </Box>
                        <Box>
                            <Link href="/" color="inherit"/>
                             Support
                        </Box>
                        </Grid>


                    </Grid>

                </Grid>

            </Container>
        </Box> 
    </div>
  )}
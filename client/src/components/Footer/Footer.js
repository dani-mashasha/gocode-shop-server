import { Box, Container, Grid, Link } from "@material-ui/core"

export default function Footer(){
    return(
    <div>
        <Box
         px={{xs: 3, sm: 10}}
         py={{xs: 5, sm: 10}}
         bgcolor="text.secondary" color="white">

            <Container maxWidth="lg">
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                        Help
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Contect
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Support 
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Privacy 
                             </Link>
                        </Box>
                        </Grid>



                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                        Account
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Login
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Register 
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Privacy 
                             </Link>
                        </Box>
                        </Grid>

                        
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                        Account
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Login
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Register 
                             </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Privacy 
                             </Link>
                        </Box>
                        </Grid>

                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm :0}}>
                    Dani Mashahsha &reg; {new Date().getFullYear()}
                </Box>

            </Container>
        </Box> 
    </div>
  )}
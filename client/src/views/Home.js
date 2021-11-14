import { Link } from "react-router-dom";
import { Button, CardMedia, makeStyles } from "@material-ui/core";
import { urlencoded } from "body-parser";
import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
  homeImg: {
    paddingBottom: "250px",
    paddingTop: "150px",
    marginTop: "-30px",
    backgroundImage:
      'url("https://cdn.hiconsumption.com/wp-content/uploads/2019/01/Best-Affordable-Mens-Online-Shops-0-Hero-1087x725.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  headline: {
    padding: "30px",
    fontFamily: "Arial Black sans-serif",
    fontSize: "4.5em",
    letterSpacing: "-1px",
    color: "white",
    textAlign: "center",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={"page"}>
      <div className={classes.homeImg}>
        <FadeIn>
          <h1 className={classes.headline}>Welcom to my online store</h1>
        </FadeIn>{" "}
        <FadeIn>
          <Link className={classes.link} to="/products-grid">
            <Button variant="contained" color="primary" size="large">
              Start Shoping Now
            </Button>
          </Link>
        </FadeIn>
      </div>

      <div className={classes.infoDiv}></div>
    </div>
  );
}

export default Home;

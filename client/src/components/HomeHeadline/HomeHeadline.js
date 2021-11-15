import useStyles from "./style.js";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import FadeIn from "react-fade-in";

const HomeHeadline = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeImg}>
      <FadeIn>
        <h1 className={classes.headline}>Welcom to Express Shop</h1>
      </FadeIn>{" "}
      <FadeIn>
        <Link className={classes.link} to="/products-grid">
          <Button variant="contained" color="primary" size="large">
            Start Shoping Now
          </Button>
        </Link>
      </FadeIn>
    </div>
  );
};

export default HomeHeadline;

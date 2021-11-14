import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeImg: {
    paddingBottom: "300px",
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

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },

    "& h1": {
      margin: "0",
      padding: "10px",
    },
  },
  img: {
    width: "100%",
    height: "50%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      height: "70%",
    },
  },
  header: {
    justifyContent: "center",
    display: "flex",
    padding: "20px",

    "& h1": {
      fontFamily: "system-ui",
      fontSize: "40px",
      textAlign: "center",
      letterSpacing: "-2px",
    },
  },
  section: {
    display: "block",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    "& div": {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    "& span": {
      width: "90%",
      padding: "20px",
    },

    "& > *": {
      fontFamily: "system-ui",
      fontSize: "20px",
    },
  },
}));

export default useStyles;

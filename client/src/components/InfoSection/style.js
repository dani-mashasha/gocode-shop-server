import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: "50px",
  },
  img: {
    width: "100%",
    height: "50%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      height: "70%",
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
      justifyContent: "center",
      alignItems: "center",
    },
    "& span": {
      width: "90%",
      padding: "20px",
      fontFamily: "system-ui",
      fontSize: "20px",
    },

    "& > *": {
      //all children
    },
  },
}));

export default useStyles;

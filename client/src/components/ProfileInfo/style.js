import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoBox: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    overflow: "hidden",
    "& h1": {
      padding: "20px",
      color: "#00bfff",
    },
    "& h2": {
      font: "revert",
    },
  },
  userHeader: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    padding: "10px",
  },
  avatar: {
    background: "#8971d0",
  },
  userContent: {
    textAlign: "left",
    fontFamily: "system-ui",
    "& h3": {
      margin: "30px",
      fontSize: "20px",
    },
    "& p": {
      margin: "30px",
    },
  },
}));

export default useStyles;

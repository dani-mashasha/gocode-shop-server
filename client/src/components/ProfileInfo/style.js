import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoBox: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    overflow: "hidden",
    "& h1": {
      padding: "20px",
    },
  },
}));

export default useStyles;

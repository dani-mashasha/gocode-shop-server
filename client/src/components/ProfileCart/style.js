import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cartCard: {
    textAlign: "center",
    "& h1, h2": {
      padding: "20px",
    },
    "& h2": {},
    "& li": {
      justifyContent: "center",
    },
  },
  profileCart: {
    maxHeight: "400px",
    overflow: "auto",
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkOutBox: {
    textAlign: "center",
    "& h1, p ": {
      padding: "20px",
    },
  },
  form: {
    margin: "20px",
    "& > * ": {
      margin: "10px",
    },
  },
  detailes: {
    "& > * ": {
      padding: "10px",
    },
  },
}));

export default useStyles;

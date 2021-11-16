import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #9fabaf8a",
  },
  media: {
    height: "30px",
    width: "90px",
    paddingTop: "56%",
    backgroundSize: "contain",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    width: "125px",
  },
  pos: {
    marginBottom: 12,
  },
  amount: {
    display: "flex",
    alignItems: "center",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "system-ui",
  },
});

export default useStyles;

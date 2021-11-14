import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 20,
    display: "flex",
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
  noPadding: {
    padding: 0,
    paddingBottom: "10px",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
});

export default useStyles;

import { Grid } from "@mui/material";
import useStyles from "./style.js";

import Fade from "react-reveal";

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.main} spacing={2}>
      <Fade bottom>
        <Grid
          className={classes.section}
          style={{ padding: "0", marginTop: "20px", marginBottom: "20px" }}
          item
          xs={12}
        >
          <Grid item xs={12} md={6}>
            {" "}
            <span>
              hvjvjnnkjnkbvcc jbhvgv khbgvgc fds nbvfcdr vbcfxdx nnn gcd dxd
              hvgc vfx nnknf vfx njh vfxx hvjvjnnkjnkbvcc jbhvgv khbgvgc fds
              nbvfcdr vbcfxdx n vfx nnknf vfx njh vfxxr vbcfxdx nnn gcd dxd hvgc
              khbgvgc fds nbvfcd hvjvjnnkjnkbvcc jbhvgv khbgvgc fds nbvfcdr
              vbcfxdx nnn gcd dxd hvgc hvjvjnnkjnkbvcc jbhvgvnn gcd dxd hvgc vfx
              nnknf vfx njh vfxx
            </span>
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <img
              className={classes.img}
              src="https://www.lifewire.com/thmb/-_3IDob2j6aNmYTPZEJPUcs-V4M=/1885x1414/smart/filters:no_upscale()/Onlineshoppingwithcart_Tevarak_iStock_GettyImagesPlus-5dac33d3b517456f9a0955b2836ebe07.jpg"
              alt=""
            />
          </Grid>{" "}
        </Grid>
      </Fade>
      <Fade bottom>
        <Grid
          style={{ padding: "0", marginTop: "20px", marginBottom: "20px" }}
          className={classes.section}
          item
          xs={12}
        >
          <Grid item xs={12} md={6}>
            <img
              className={classes.img}
              src="http://www.bio-lelivre.com/wp-content/uploads/2020/06/001.jpg"
              alt=""
            />
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <span>
              hvjvjnnkjnkbvcc jbhvgv khbgvgc fds nbvfcdr vbcfxdx nnn gcd dxd
              hvgc vfx nnknf vfx njh vfxx hvjvjnnkjnkbvcc jbhvgv khbgvgc fds
              nbvfcdr vbcfxdx n vfx nnknf vfx njh vfxxr vbcfxdx nnn gcd dxd hvgc
              khbgvgc fds nbvfcd hvjvjnnkjnkbvcc jbhvgv khbgvgc fds nbvfcdr
              vbcfxdx nnn gcd dxd hvgc hvjvjnnkjnkbvcc jbhvgvnn gcd dxd hvgc vfx
              nnknf vfx njh vfxx
            </span>
          </Grid>{" "}
        </Grid>
      </Fade>
    </Grid>
  );
};

export default InfoSection;

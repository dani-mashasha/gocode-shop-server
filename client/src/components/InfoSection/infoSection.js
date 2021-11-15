import { Grid } from "@mui/material";
import useStyles from "./style.js";

import Fade from "react-reveal";

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.main} spacing={2}>
      <Fade bottom>
        <Grid item className={classes.header}>
          <div>
            <h1>About Express Shop</h1>
          </div>
        </Grid>

        <Grid
          className={classes.section}
          style={{ padding: "0", marginTop: "20px", marginBottom: "20px" }}
          item
          xs={12}
        >
          <Grid item xs={12} md={6}>
            {" "}
            <div>
              <h1>Express Delivery</h1>
              <span>
                Nulla in condimentum velit. Fusce efficitur quis libero ac
                ultricies. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Vestibulum in justo rutrum,
                ultrices diam eu, porttitor ante. Ut commodo purus enim, a
                pretium arcu luctus in. Donec in lorem sodales sem
              </span>
            </div>
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
            <div>
              <h1>Easy and Simple Payment </h1>
              <span>
                Aliquam vitae purus vitae metus gravida aliquet mollis sed
                ipsum. Aliquam placerat sapien sit amet nisi ultrices cursus. Ut
                pharetra orci luctus, fermentum eros ut, dignissim nulla. Morbi
                elit dui, placerat in diam non, pretium lacinia velit. Nulla ex
                elit, gravida a nulla malesuad
              </span>
            </div>
          </Grid>{" "}
        </Grid>
      </Fade>
    </Grid>
  );
};

export default InfoSection;

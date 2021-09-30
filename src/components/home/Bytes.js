import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";
import { useMediaQuery, useTheme } from "@material-ui/core"
import CarousalWithArrowsOnDesktop from "../utils/CarousalWithArrowsOnDesktop"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "space-evenly",
    justifyContent: "center",
    minHeight: "20vh",
  },
  cardList: {
    padding: "1rem auto",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#05152E",
  },
  card: {
    padding: "2rem 0",
    margin: "1rem",
    textAlign: "center",
  },
  videoWrapper: {
    //moreInfo: https://css-tricks.com/fluid-width-video/#iframe-video-youtube-vimeo-etc
    position: "relative",
    paddingBottom: "56.25%",
    height: "0",
    "&>iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }
  }
}));

export default function Bytes({ state: bytes }) {

  return (
    <Grid container direction="column">
      <HeadingWithText content={bytes.header} />
      <CardList content={bytes.videoLinks} />
    </Grid>
  );

}

const CardList = ({ content }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  let numberOfSlides = 3;
  if (isSmallScreen)
    numberOfSlides = 1;
  else if (isMediumScreen)
    numberOfSlides = 2;
  else
    numberOfSlides = 3;

  return <Grid container className={classes.cardList} item justifyContent="center" alignItems="center">
    <CarousalWithArrowsOnDesktop card={<Card />} content={content} numberOfSlides={numberOfSlides} />
  </Grid>
}

const Card = ({ link, title = "YouTube video player" }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.card}  >
      <iframe style={{
        borderRadius: "10px",
        aspectRatio: "425/280"
      }}
        height="240px"
        rel="prefetch"
        src={link}
        title={title}
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Grid>

  );
}



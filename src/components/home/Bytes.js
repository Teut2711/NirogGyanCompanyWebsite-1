import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeadingWithText from "../utils/HeadingWithText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CarousalWithArrowsOnDesktop from "../utils/CarousalWithArrowsOnDesktop";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "space-evenly",
    justifyContent: "center",
    minHeight: "20vh",
  },
  cardsList: {
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
      <CardsList content={bytes.videoLinks} />
    </Grid>
  );

}

const CardsList = ({ content }) => {
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

  return <Grid container className={classes.cardsList} item justifyContent="center" alignItems="center">
    <CarousalWithArrowsOnDesktop card={<Card />} content={content} numberOfSlides={numberOfSlides} />
  </Grid>
}

// const Card = ({ link, title = "YouTube video player" }, videoId, altText="video" ) => {
//   const classes = useStyles();

//   return (
//     <Grid item className={classes.card}  >
//       {/* <iframe 
//         height="220px"
//         rel="preload"
//         src={link}
//         title={title}
//         frameBorder="2"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       ></iframe> */}
//     </Grid>

//   );
// }
const Card = ({ link, title = "YouTube video player", videoId, altText="video" }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.card}  >
      <iframe style={{
        borderRadius: "10px",
        aspectRatio: "425/280"
      }}
        height="220px"
        rel="preload"
        src={link}
        title={title}
        frameBorder="2"
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:53px/1.5 sans-serif;color:white;border:12px red;text-shadow:0 0 0.8em black}</style><a href=https://www.youtube.com/embed/${videoId}?autoplay=1><img src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg alt='${altText}'><span>▶</span></a>`}
      ></iframe>
    </Grid>

  );
}


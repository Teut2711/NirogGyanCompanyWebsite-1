import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
    marginTop: "0.5rem",
    padding: "0.5rem",
    minHeight: "75vh"
  },
  title: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    fontWeight: "700",
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
    }
  },
  content: {
    justifyContent: "space-evenly",
    alignItems: "left",
    [theme.breakpoints.down('md')]: {
  justifyContent: "left",
}
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
      padding: "3rem"
    }
  },
  buttonSet: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonServices: {
    borderRadius: "20px",
    padding: "0.5rem 2rem",
    textTransform: "none",

  },
  watchVideoButton: {
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": { backgroundColor: "transparent" },
  },

  videoButtonIcon: {
    color: "#102554",
    fontSize: "3rem"
  },
  imageBox: {
    minHeight: "70vh",
    backgroundSize: "contain", backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down('md')]: {
      minHeight: "50vh",

    }
  }
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-around">
      <Content content={heroSection.info} />
      <ImageBox imagePath={heroSection.imagePath} />
    </Grid>
  )

}

const Content = ({ content }) => {
  const classes = useStyles();
  return <Grid container item md={4} direction="column" className={classes.content}>
    <Heading text={content.heading} />
    <Description text={content.description} />
    <ButtonSet content={content.buttons} />
  </Grid>
}

const Heading = ({ text }) => {
  const classes = useStyles();

  return <Grid container item direction="column">
    <Grid item>
      <Typography
        variant="h2"
        className={classes.title}>
        {text.line1}
      </Typography>
    </Grid>

    <Grid item>
      <Typography
        variant="h2"
        className={classes.title}>
        {text.line2}
      </Typography>
    </Grid>
  </Grid>
}


const Description = ({ text }) => {
  const classes = useStyles();
  return <Grid container item className={classes.text}>
    <Typography variant="body2" >
      {text}
    </Typography>
  </Grid>
}

const ButtonSet = ({ content }) => {
  const classes = useStyles();
  return <Grid container item className={classes.buttonSet}>
    <ButtonServices text={content.services} />
    <ButtonWatchVideo text={content.watchVideo} />
  </Grid>
}

const ButtonServices = ({ text }) => {
  const classes = useStyles();
  return <Grid container item xs={6} flexShrink="1">
    <Button variant="contained" color="primary" className={classes.buttonServices}>
      {text}
    </Button>
  </Grid>
}


const ButtonWatchVideo = ({ text }) => {
  const classes = useStyles();
  return <Grid container item xs={6} alignItems="center" flexWrap="wrap">
    <Grid item sm={3} >
      <IconButton className={classes.watchVideoButton}>
        <PlayCircleFilledIcon className={classes.videoButtonIcon} />
      </IconButton>
    </Grid>
    <Grid item sm={6} >
      <Typography variant="subtitle1">
        {text}
      </Typography>
    </Grid>
  </Grid>
}

const ImageBox = ({ imagePath }) => {
  const classes = useStyles();
  return <Grid container item sm={12} md={5} justifyContent="flex-start" className={classes.imageBox}
    style={{ backgroundImage: `url(${imagePath})` }}>

  </Grid>
}

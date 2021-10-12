import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
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
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
  },
  content: {
    justifyContent: "space-evenly",
    alignItems: "left",
    padding: "2rem",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    }
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
      padding: "1rem"
    }
  },
  buttonSet: {

    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonServicesContainer: {

    "&>button": {
      borderRadius: "20px",
      padding: "0.5rem 2rem",
      textTransform: "none",

    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }

  },
  buttonWatchVideoContainer: {
    alignItems: "center",
    "&>button": {
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }
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
  },
  contentRight: {
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-around">
      <ContentLeft content={heroSection.contentLeft} />
      <ContentRight content={heroSection.contentRight} />
    </Grid>
  )

}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item md={7} direction="column" className={classes.content}>
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
  return <Grid container item xs={6} className={classes.buttonServicesContainer}>
    <Button variant="contained" color="primary">
      {text}
    </Button>
  </Grid>
}


const ButtonWatchVideo = ({ text }) => {
  const classes = useStyles();
  return <Grid container item xs={6} className={classes.buttonWatchVideoContainer}>
    <Grid item>
      <IconButton className={classes.watchVideoButton} style={{ display: "inline-block", textAlign: "center" }}>
        <PlayCircleFilledIcon className={classes.videoButtonIcon} />
        <Typography variant="subtitle2">
          {text}
        </Typography>
      </IconButton>
    </Grid>

  </Grid>
}


const ContentRight = ({ content }) => {
  const classes = useStyles();

  return <Grid item xs={12} md={5} className={classes.contentRight}>
    <img loading="lazy" src={content.imagePath} alt="doctor" />
  </Grid>
}

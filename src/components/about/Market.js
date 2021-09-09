import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem"

  },
  contentRight: {
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "10px",
  },
  imageBox: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#E9F5FF",
    "&>img": {
      margin: "auto "
    }
  },
  textBox: {

    "&>*": {
      textAlign: "left",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      padding: "1rem",
      textWrap: "word-break"
    }
  },
  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem"

  }

})
);

export default function Market({ state: market }) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ContentLeft content={market.contentLeft} />
      <ContentRight content={market.contentRight} />
    </Grid>
  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" xs={12} md={6} className={classes.contentLeft}>
    <Header content={content.header} />
    <CardsList content={content.cardsList} />
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.heading}>
    <HeadingWithText content={content} />

  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map(({ imagePath, textThin, textBold }, index) => (<Card {...{ imagePath, textThin, textBold }} key={index} />))}
  </Grid>


}


const Card = ({ imagePath, textThin, textBold }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.card}  >
      <Grid item xs={4} className={classes.imageBox}>
        <img src={imagePath} alt="market" />
      </Grid>
      <Grid item xs={8} className={classes.textBox}>
        <Typography variant="h6" color="textSecondary">
          {textThin}
        </Typography>
        <Typography variant="h6" color="textSecondary" style={{ fontWeight: "bolder" }}>
          {textBold}
        </Typography>
      </Grid>
    </Grid>
  )
}

const ContentRight = ({ content }) => {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.contentRight}>
    <img src={content.imagePath} alt="doctor" />
  </Grid>
}







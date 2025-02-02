import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HeadingWithText from "../utils/HeadingWithText";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  cardsList: {
    justifyContent: "center",
  },

  serviceCard: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "15px",
    alignContent: "center",
    border: "1px solid #B8BBBD",
    margin: "2rem",
    boxShadow: "39px 11px 83px -53px #B8BBBD",
    "&__logo-box": {
      textAlign: "center",
      textWrap: "word-break",
      padding: "1rem"
    },
    "&__heading": {
      textAlign: "center",
    },
    "&__content": {
      padding: "1rem",
      textAlign: "center",
    }
  }
}

));


export default function Services({ state: services }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root} style={{ backgroundImage: `url(${services.backgroundImage})` }}>
      <HeadingWithText content={services.header} />
      <Grid item style={{ height: "1rem" }}></Grid>
      <CardsList cardsList={services.cardsList} />
    </Grid>);
}

const CardsList = ({ cardsList }) => {
  const classes = useStyles();

  return <Grid container item className={classes.cardsList} >
    {cardsList.map((props, index) => (
      <Card {...props} key={index} />
    ))
    }
  </Grid>
}

const Card = ({ image: { imagePath, altText = "logo-default" }, heading, content }) => {

  const classes = useStyles();

  return (
    <Grid container item direction="column" className={classes.serviceCard} alignItems="baseline" xs={12} sm={5}  md={2} >
      <Grid item >
        <Grid item className={`${classes.serviceCard}__logo-box`} style={{ marginBottom: "1rem" }}>
          <img loading="lazy" src={imagePath} alt={altText} width="60px" height="60px" />
          <Typography variant="h5">
            <a style={{textDecoration: "none"}} href={heading.url}> {heading.text}</a>
          </Typography>
        </Grid>
        <Grid item className={`${classes.serviceCard}__content`}>
          {content.map((text, index) => <Typography key={index} variant="body1" color="textSecondary">{text}</Typography>)}
        </Grid>
      </Grid>
    </Grid>


  );
}



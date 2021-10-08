import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { useSmallScreen } from "../customHooks"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "4rem",
        flexGrow: 1,
        backgroundColor: "#3567D6",
        backgroundPosition: "30% 70%",
        color: "#fff",
        backgroundAttachment: "fixed"

    },
    text: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        color: "#05152E",
        margin: theme.spacing(1),
    },
    headingWithText: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        padding: "3rem 0",
        textAlign: "center",
    },
    button: {
        fontWeight: "bold",
        backgroundColor: "#3CD0FF",
        fontFamily: '"Nunito Sans"',
        fontSize: "24px",
        borderRadius: "40px",
        '&:hover': {
            backgroundColor: '#163b76',
            color: '#fff'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        }
    },
    title: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
        }
    }
}));



export default function HelpedOrganisations({ state: helpedOrganisations }) {
    const classes = useStyles();
    const { link, text } = helpedOrganisations.button;
    const absoluteurl = `\\${link}`;
    const isSmallScreen = useSmallScreen();
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root} style={
            { backgroundImage: `url(${helpedOrganisations.backgroundImage})` }}>
            <HeadingWithText content={helpedOrganisations.header}></HeadingWithText>
            <Button variant="contained" size="large" className={classes.button}
                component={Link}
                to={absoluteurl}
                rel="noreferrer"
                target="_blank">
                <Box fontWeight="fontWeightBold" m={1} ml={3} mr={3} style={{ textAlign: "center" }}>

                    {isSmallScreen ? text.mobile : text.desktop}
                </Box>
            </Button>
        </Grid>)
}

const HeadingWithText = ({ content }) => {
    const classes = useStyles();

    return <Grid container item className={classes.headingWithText} justifyContent="center" alignItems="center">
        <Grid item className={classes.heading}>
            <Typography
                variant="h3" gutterBottom
                className={classes.title}>
                {content.heading.map(
                    ({ text, style = {} }, index) => <span key={index} style={style}>{text}</span>
                )}
            </Typography>
        </Grid>
        <Grid item md={8} className={classes.description}>
            {content?.description && <Typography
                variant="body1"
                color="textSecondary"
                style={{
                    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                    color: "#fff"
                }}>
                {content.description}
            </Typography>}
        </Grid>
    </Grid>

}


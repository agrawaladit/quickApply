import React from "react";
import {makeStyles, createStyles, fade} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgressWithPercentage from "./CircularProgressWithPercentage";
import StatusChip from "./StatusChip";
import {useHistory} from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import LinkIcon from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button, Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            background: fade("#b8b8b8", 0.5),
            marginBottom: theme.spacing(1),
            "&:hover": {
                backgroundColor: fade("#74c0e3", 0.5),
            },
        },
        grid: {
            paddingTop: "0.7%",
            paddingBottom: "0.5%",
        },
        paper: {
            paddingTop: 0,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        cardAction: {
            display: "block",
            textAlign: "initial",
            width: "100%",
            fontFamily: `Montserrat, sans-serif`,
        },
        typography: {
            fontWeight: "lighter",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "240px",
            justifyContent: "start",
            display: "flex",
        },
        button: {
            '.MuiButton-outlinedPrimary' : {
                color: "#42c2f5"
            }
        }
    })
);


const TableRow = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const redirectToOpportunity = (data) => {
        // history.push(ROUTES.OPPORTUNITY, { ...data, recruiterOrAdmin: props.recruiterOrAdmin });
    };


    const content =
        <Grid container className={props.variant === "applications" ? classes.grid : null}>
            <Grid container item xs={1} className={classes.paper} style={{paddingLeft: "20px"}}>
                <Typography variant={"body2"} className={classes.typography}>
                    {props.data.rank || "N/A"}
                </Typography>
            </Grid>
            <Grid
                container
                item
                xs={1}
            >
                <CircularProgressWithPercentage value={props.data.match}/>
            </Grid>
            <Grid container item xs={6}>
                <Grid container item xs={6} className={classes.paper}>
                    <Typography variant={"body2"} noWrap className={classes.typography}>
                        {props.data.company || "N/A"}
                    </Typography>
                </Grid>
                <Grid container item xs={6} className={classes.paper}>
                    <Typography variant={"body2"} noWrap className={classes.typography}>
                        {props.data.title || "N/A"}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={4}>
                <Grid container item xs={9} className={classes.paper}>
                    <Typography variant={"body2"} noWrap className={classes.typography}>
                        {props.data.location || "N/A"}
                    </Typography>
                </Grid>
                <Grid container item xs={3} className={classes.paper}>
                    <div
                        className={classes.typography}
                        style={{zIndex: 1000}}>
                        {props.variant === "applications" ?
                            <StatusChip value={"Closed"}/>
                            :
                            <Button variant="outlined" color={"primary"} className={classes.button} onClick={(e) => e.stopPropagation()}>
                                Apply
                            </Button>
                        }
                    </div>
                </Grid>
            </Grid>
        </Grid>

    return props.variant !== "applications" ?
        <Accordion expanded={expanded === props.key} onChange={handleChange(props.key)} style={{marginBottom: "15px", background: fade("#b8b8b8", 0.5),}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {content}
            </AccordionSummary>
            <Divider/>
            <AccordionDetails>
                <Typography>
                    {props.data.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
        :
        <ButtonBase className={classes.cardAction} disableRipple={true}>
            <Paper className={classes.root} onClick={() => redirectToOpportunity(props.data)}>
                {content}
            </Paper>
        </ButtonBase>
};

export default TableRow;

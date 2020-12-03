import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import useTheme from "@material-ui/core/styles/useTheme";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
        },
        cardAction: {
            display: "block",
            verticalAlign: "middle",
            width: "100%",
            fontFamily: theme.typography.fontFamily,
        },
    })
);

const TableHeader = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [currentSort, changeSort] = useState(props.variant === "matches" ? "match" : "rank");
    const [rank, setRank] = useState(-1);
    const [match, setMatch] = useState(props.variant === "matches" ? -1 : 1);
    const [company, setCompany] = useState(1);
    const [title, setTitle] = useState(1);
    const [stage, setStage] = useState(1);
    const [date, setDate] = useState(1);
    const [location, setLocation] = useState(1);
    const [status, setStatus] = useState(1);

    const arrowDirection = (order, property) => {
        if (property === currentSort) {
            return order === -1 ? (
                <ArrowDropDownIcon fontSize="small" style={{ color: "#42c2f5", paddingBottom: "3px" }} />
            ) : (
                <ArrowDropUpIcon fontSize="small" style={{ color: "#42c2f5", paddingBottom: "3px" }} />
            );
        }
        return <ArrowDropDownIcon fontSize="small" style={{ paddingBottom: "3px" }} />;
    };

    return (
        <Grid container item className={classes.root} style={props.variant==="applications" ? {}: {paddingRight:"50px"}}>
            <Grid
                item
                xs={1}
                onClick={async () => {
                    await setRank(-rank);
                    await changeSort("rank");
                    props.changeSort(rank, "rank");
                }}
            >
                <ButtonBase className={classes.cardAction} disableRipple={true}>
                    <Grid container style={{ paddingLeft: "6px" }}>
                        Rank
                        {arrowDirection(rank, "rank")}
                    </Grid>
                </ButtonBase>
            </Grid>
            <Grid
                container
                item
                xs={1}
                onClick={async () => {
                    await setMatch(-match);
                    await changeSort("match");
                    props.changeSort(match, "match");
                }}
            >
                <ButtonBase className={classes.cardAction} disableRipple={true}>
                    <Grid container style={props.variant === "matches" ? { paddingLeft: "20px" } : {}}>
                        Match
                        {arrowDirection(match, "match")}
                    </Grid>
                </ButtonBase>
            </Grid>
            <Grid container item xs={6}>
                <Grid
                    container
                    item
                    xs={6}
                    onClick={async () => {
                        await setCompany(-company);
                        await changeSort("company");
                        props.changeSort(company, "company");
                    }}
                >
                    <ButtonBase className={classes.cardAction} disableRipple={true}>
                        <Grid container>
                            Company
                            {arrowDirection(company, "company")}
                        </Grid>
                    </ButtonBase>
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    onClick={async () => {
                        await setTitle(-title);
                        await changeSort("title");
                        props.changeSort(title, "title");
                    }}
                >
                    <ButtonBase className={classes.cardAction} disableRipple={true}>
                        <Grid container>
                            Job Title
                            {arrowDirection(title, "title")}
                        </Grid>
                    </ButtonBase>
                </Grid>
            </Grid>
            <Grid container item xs={4}>
                <Grid
                    container
                    item
                    xs={9}
                    onClick={async () => {
                        await setLocation(-location);
                        await changeSort("location");
                        props.changeSort(location, "location");
                    }}
                >
                    <ButtonBase className={classes.cardAction} disableRipple={true}>
                        <Grid container>
                            Location
                            {arrowDirection(location, "location")}
                        </Grid>
                    </ButtonBase>
                </Grid>
                <Grid container item xs={3}>
                    <ButtonBase className={classes.cardAction} disableRipple={true}>
                        <Grid container>{props.variant === "applications" ? "Status" : "Apply"}</Grid>
                    </ButtonBase>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TableHeader;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import SelectSkills from "./SelectSkills";
import Jobs from "./Jobs";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: "200px",
        height: "200px",
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <Grid container direction={"column"} className={classes.root}>
            <Grid container>
                <Grid container item xs={2}>
                    <Avatar alt="Remy Sharp" className={classes.large} >Afsds</Avatar>
                </Grid>
                <Grid container item xs={10} direction={"column"}>
                    <Typography variant={"h3"} style={{justifyContent: "start", display: "flex", }}>
                        Aditya Agrawal
                    </Typography>
                    <br/>
                    <br/>
                    <SelectSkills />
                </Grid>
            </Grid>
            <Grid container style={{paddingTop: "40px"}} direction={"column"}>
                <Typography variant={"h4"} style={{justifyContent: "start", display: "flex", }}>
                    Applications
                </Typography>
                <br/>
                <br/>
                <Jobs variant={"applications"}/>
            </Grid>

        </Grid>
    );
}

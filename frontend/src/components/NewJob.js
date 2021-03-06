import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import SelectSkills from "./SelectSkills";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import qs from 'qs';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles((theme) => ({
    tf: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#42c2f5"
        },
    },
    cssLabel: {
        "&.Mui-focused": {
            color: "#23A5EB"
        }
    }
}));

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function NewJob() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("Microsoft");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        axios({
            method: 'post',
            url: 'http://ec2-52-12-241-178.us-west-2.compute.amazonaws.com:3000/api/jobs/submit',
            data: qs.stringify({
                title: title,
                jobid: 30,
                company: "Google",
                location: location,
                description: description,
                skills: skills
            })
        })
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Post New Job
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    New Job
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction={"column"}>
                        <TextField
                            className={classes.tf}
                            label="Title"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                }
                            }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br/>
                        <TextField
                            className={classes.tf}
                            label="Location"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                }
                            }}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <br/>
                        <TextField
                            className={classes.tf}
                            label="Job Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                }
                            }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br/>
                        <SelectSkills onChange={(skills) => setSkills(skills)}/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Post Job
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

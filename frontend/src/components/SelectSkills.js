/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
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

export default function SelectSkills() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        className={classes.tf}
                        {...params}
                        variant="outlined"
                        label="Skills"
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                            }
                        }}
                    />
                )}
            />
        </div>
    );
}

const top100Films = [
    { title: 'Python' },
    { title: 'Java' },
    { title: 'C++' },
    { title: 'C' },
    { title: 'React' },
    { title: 'Node' },
    { title: 'MySQL' }
];

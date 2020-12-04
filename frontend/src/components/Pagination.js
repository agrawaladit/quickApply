import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            fontSize: "13px",
            marginRight: "20px",
        },
        pageSelector: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        lighterFont: {
            fontWeight: "lighter",
            fontSize: "14px",
        },
    })
);

function PaginationFunc(props) {
    const classes = useStyles();
    //Number of Rows Selector
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [rows, setRows] = React.useState(props.rows);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = async (event) => {
        setAnchorEl(null);
        const { myValue } = event.currentTarget.dataset;
        await setRows(parseInt(myValue || "10"));
        await props.setRows(parseInt(myValue || "10"));
    };
    //end

    return (
        <Box display="flex" justifyContent="flex-end">
            <Box p={1} className={classes.pageSelector}>
                <Typography className={classes.lighterFont}>Rows per Page</Typography>
            </Box>
            <Box p={1}>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    {rows}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose} data-my-value={5}>
                        5
                    </MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={10}>
                        10
                    </MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={25}>
                        25
                    </MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={50}>
                        50
                    </MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={100}>
                        100
                    </MenuItem>
                </Menu>
            </Box>
            <Box p={1}>
                <Pagination
                    count={Math.ceil(props.length / rows)}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    onChange={(_, page) => props.changePage(page)}
                />
            </Box>
        </Box>
    );
}

export default PaginationFunc;

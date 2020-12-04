import React from "react";
import Chip from "@material-ui/core/Chip";
import useTheme from "@material-ui/core/styles/useTheme";

const StatusChip = (props) => {
    const theme = useTheme();
    let mode = "white";
    switch (props.value) {
        case "Pending Review":
        case "Active":
            mode = "rgba(5,164,14,0.9)";
            break;
        case "Not Interested":
        case "Closed":
            mode = "rgba(245,34,27,0.9)";
            break;
        case "Hold":
        case "Paused":
            mode = "rgba(227,167,18,0.9)";
            break;
        case "New":
            mode = theme.palette.secondary.main;
            break;
        default:
            mode = "transparent";
    }

    return (
        <Chip
            size="small"
            label={props.value}
            variant="outlined"
            style={{ color: mode, borderColor: mode}}
        />
    );
};

export default StatusChip;

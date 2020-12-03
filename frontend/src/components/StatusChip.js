import React from "react";
import Chip from "@material-ui/core/Chip";
import useTheme from "@material-ui/core/styles/useTheme";

const StatusChip = (props) => {
    const theme = useTheme();
    let mode = "white";
    switch (props.value) {
        case "Pending Review":
        case "Active":
            mode = "rgba(158, 255, 164, 0.9)";
            break;
        case "Not Interested":
        case "Closed":
            mode = "rgba(255, 102, 97, 0.9)";
            break;
        case "Hold":
        case "Paused":
            mode = "rgba(255, 208, 97, 0.9)";
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

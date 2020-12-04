import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CircularProgressWithPercentage = (props) => {
    let variableColor;

    if (props.value > 75) variableColor = "rgb(0,95,7)";
    else if (props.value < 50) variableColor = "rgb(250,55,48)";
    else variableColor = "rgb(196,140,0)";

    return (
        <Box position="relative" color="black" display="flex" alignItems="center" justifyContent="center">
            {typeof props.value !== "undefined" ? (
                <CircularProgress style={{ opacity: 1, color: variableColor, borderRadius: 20 }} variant="static" {...props} />
            ) : (
                <CircularProgress color="secondary" />
            )}
            {props.value ? (
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    padding={"auto"}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div" style={{ color: variableColor }}>
                        <Box fontWeight="fontWeightLight">{`${props.value}%`}</Box>
                    </Typography>
                </Box>
            ) : null}
        </Box>
    );
};

const CircularStatic = (props) => {
    const [progress, setProgress] = React.useState(1);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(props.value === 0 ? 1 : props.value);
        }, 100);
        return () => {
            clearInterval(timer);
        };
    });

    return <CircularProgressWithPercentage value={progress} />;
};

export default CircularStatic;

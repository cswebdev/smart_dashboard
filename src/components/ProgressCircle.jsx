import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";


const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const angle = progress * 360;

    return (
        <Box
            sx={{
                position: "relative",
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%)
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[400]} ${angle}deg 360deg)
                ${colors.greenAccent[500]}`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                border: `1px solid ${colors.primary[400]}`,
                boxShadow: `0 0 0 1px ${colors.primary[400]}`,
                // "&:after": {
                //     content: '""',
                //     position: "absolute",
                //     top: "0",
                //     left: "0",
                //     width: "100%",
                //     height: "100%",
                //     borderRadius: "50%",
                //     clipPath: `polygon(50% 0%, 0% 0%, 0% 100%)`,
                //     backgroundColor: colors.greenAccent[400],
                //     transform: `rotate(${angle}deg)`,
                //     transformOrigin: "center",
                // },
            }}
        >
        </Box>

    )

}


export default ProgressCircle
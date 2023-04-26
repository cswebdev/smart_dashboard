import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import faqStyles from "./faqStyles.css";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordian>
                <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this website?</Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography color={colors.grey[100]}>
                        This website is a demo of a ReactJS application using Material UI and MUI Data Grid.
                    </Typography>
                </AccordianDetails>
            </Accordian>
            <Accordian>
                <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">Why create this website?</Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography color={colors.grey[100]}>
                        I wanted to challenge myself to create an analytics dashboard.
                    </Typography>
                </AccordianDetails>
            </Accordian>
            <Accordian>
                <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the tech stack of this project? </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography color={colors.grey[100]}>
                        The technologies used in this project are:
                        <ul>
                            <li>ReactJS</li>
                            <li>Material UI</li>
                            <li>MUI Data Grid</li>
                            <li>React Router</li>
                            <li>Full Calendar</li>
                            <li>React Sidebar Pro</li>
                            <li>Formik</li>
                            <li>Yup</li>
                            <li>Nivo</li>
                        </ul>


                    </Typography>
                </AccordianDetails>
            </Accordian>
            <Accordian>
                <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">Is this website full stack?</Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography color={colors.grey[100]}>
                        No, this website is currently only front end. I plan to add a backend in the future.
                    </Typography>
                </AccordianDetails>
            </Accordian>
            <Accordian>
                <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">Is this project a tutorial?</Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography color={colors.grey[100]}>
                        Yes, I created this website following the tutorial made by youtuber, EdRoh. You can find the tutorial at the following link: <a href="https://www.youtube.com/watch?v=wYpCWwD1oz0">[Build a COMPLETE React Admin Dashboard App]</a>
                    </Typography>
                </AccordianDetails>
            </Accordian>
        </Box>
    )
}

export default FAQ;

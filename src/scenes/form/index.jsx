import {Box, Button, Textfield} from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const userSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    contact: yup.string().required("Contact is required"),
    address1: yup.string().required("Address is required"),
    address2: yup.string().required("Address is required"),
})  


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values)
    }


    return (
        <Box m= "20px">
            <Header title="CREATE USER" subtitle="Create a new user"/>
            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
            >

            </Formik>
        </Box>
    )

}

export default Form

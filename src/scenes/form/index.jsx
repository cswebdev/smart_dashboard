import { Box, Button, TextField } from "@mui/material"
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

const phoneRegExp = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;



const userSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
        .string()
        .email("Invalid Email")
        .required("Email is required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Contact is required"),
    address1: yup.string().required("Address is required"),
    address2: yup.string().required("Address is required"),
})


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values)
    }


    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a new user" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid" 
                            gap="30px" 
                            gridTemplateColumns="repeat(4, minmax(0,1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: "span 2"}}

                            />
                                <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}

                            />
                                <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: "span 4"}}

                            />
                               <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                name="contact"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: "span 4"}}

                            />
                               <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                name="address1"
                                value={values.address1}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{gridColumn: "span 4"}}

                            />
                               <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                name="address2"
                                value={values.address2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: "span 4"}}

                            />
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )

}

export default Form

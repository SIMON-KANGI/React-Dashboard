
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";


const initialValues={
  firstName:"",
  lastName:"",
  Adress1:"",
  Adress2:"",
  number:"",
  email:""


}
const phoneRegExp =/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema=yup.object().shape({
  firstName:yup.string().required('required'),
  lastName:yup.string().required('required'),
  Adress1:yup.string().required('required'),
  Adress2:yup.string().required('required'),
  email:yup.string().email('invalid email').required('required'),
  number:yup.string().matches(phoneRegExp, "Invalid number").required('required'),

})
function Profile() {
  const handleFormSubmit=(values)=>{
    console.log(values)
  }
 
  
  return (
    <div>
      <h1 className="text-slate-200 text-2xl font-bold m-2">CREATE PROFILE</h1>
      <small className="text-green-600 font-bold m-2">Create new user profile</small>
      <Box
      >
<Formik
onSubmit={handleFormSubmit}
initialValues={initialValues}
validationSchema={userSchema}
>
{({
  values, handleChange, handleBlur, handleSubmit, touched, errors
})=>(
  <Form
onSubmit={handleSubmit}>
<Box
class="grid m-2 gap-3">
<TextField
fullWidth
type="text"
variant="filled"
label="first Name"
onChange={handleChange}
value={values.firstName}
onBlur={handleBlur}
name="firstName"
sx={{gridColumn:"span 2", background:"rgb(30,30,50)"}}
error={!!touched.firstName&& !!errors.firstName}
helperText= {touched.firstName&& errors.firstName}
/>
<TextField
fullWidth
type="text"
variant="filled"
label="Last Name"
onChange={handleChange}
value={values.lastName}
onBlur={handleBlur}
name="lastName"
sx={{gridColumn:"span 2", background:"rgb(30,30,50)"}}
error={!!touched.lastName&& !!errors.lastName}
helperText= {touched.lastName&& errors.lastName}
/>
<TextField
type="text"
fullWidth
variant="filled"
label="Email"
onChange={handleChange}
value={values.email}
onBlur={handleBlur}
sx={{gridColumn:"span 4", background:"rgb(30,30,50)"}}
error={!!touched.email&& !!errors.email}
helperText= {touched.email&& errors.email}
/>
<TextField
type="text"
fullWidth
variant="filled"
label="Contact"
onChange={handleChange}
value={values.number}
onBlur={handleBlur}
name="number"
sx={{gridColumn:"span 4", background:"rgb(30,30,50)"}}
error={!!touched.number&& !!errors.number}
helperText= {touched.number&& errors.number}
/>

<TextField
type="text"
fullWidth
variant="filled"
label="Adress 1"
onChange={handleChange}
value={values.Adress1}
onBlur={handleBlur}
name="Adress1"
sx={{gridColumn:"span 4", background:"rgb(30,30,50)"}}
error={!!touched.Adress1&& !!errors.Adress1}
helperText= {touched.Adress1&& errors.Adress1}

/>
<TextField
type="text"
fullWidth
variant="filled"
label="Adress2"
onChange={handleChange}
value={values.Adress2}
onBlur={handleBlur}
name="Adress2"
sx={{gridColumn:"span 4", background:"rgb(30,30,50)"}}
error={!!touched.Adress2&& !!errors.Adress2}
helperText= {touched.Adress2&& errors.Adress2}
/>
<Box justifyContent="end">
  <Button onSubmit={handleSubmit} type="submit"  variant="contained">
    Create User
  </Button>
</Box>
</Box>



</Form>
)}


</Formik>





      </Box>
    </div>
  )
}

export default Profile

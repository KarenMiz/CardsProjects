import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function FormExample() {
    const [fornData, setFormData] = useState({ firstName: "", lastName: "" });
    const [errors, setErrors] = useState({ firstName: "", lastName: "" });
    const handelChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value, }))
    }

    return (
        <Box>
            <Box>
                <TextField label="First Name" name="firstName" />
                <TextField label="Last Name" name="lastName" />
                <Button>SUBMIT</Button>
            </Box>
        </Box>
    );
}

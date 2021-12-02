import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Search({ setDefaultCity }) {
    const [value, setValue] = useState("")
    const handleSubmit = () => {
        setDefaultCity(value)
        setValue("")
    }
    return (
        <div className="Search">
            <TextField id="standard-basic" label="Search for a city" value={value} className="search-in" variant="standard" onChange={(e) => setValue(e.target.value)} />
            <Button variant="contained" onClick={() => handleSubmit()} style={{ marginTop: '10px', marginLeft: "10px" }}>Search</Button>
        </div>
    )
}

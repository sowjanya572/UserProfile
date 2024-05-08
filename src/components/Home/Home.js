import React from 'react';
import Box from '@mui/material/Box';
import { FormControl,Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function Home(){

   return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
    <form>
    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
       
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      
      <Button variant="contained" size="large">
          Submit
        </Button>
      </form>
      </div>
  </Box>
   )
}
export default Home;
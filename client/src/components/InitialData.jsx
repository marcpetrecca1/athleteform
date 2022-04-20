import React from 'react';
import { AppBar, TextField, Toolbar, IconButton, MenuIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';

const InitialData = ({playerInfo, nextStep, handleChange}) => {

  const forward = (e) => {
    e.preventDefault()
    nextStep();
  };

  const name = 'name';
  const dateOfBirth = 'dateOfBirth';
  const location = 'location';
  const team = 'team';

  return (
    <Box sx={{flexgrow: 1, bgcolor: 'palette.primary.main' }} >
      <AppBar title="Enter User Details" sx={{ color: 'blue' }}/>
        <Toolbar>
        </Toolbar>
      <AppBar/>
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, name)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, dateOfBirth)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, location)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, team)}
      />
    </Box>
  )
};

export default InitialData;
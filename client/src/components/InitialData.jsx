import React from 'react';
import { AppBar, TextField, Toolbar, Button, IconButton, MenuIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';

const InitialData = ({ playerInfo, nextStep, handleChange, setPlayerInfo}) => {

  const forward = (e, playerInfo) => {
    e.preventDefault()
    nextStep(playerInfo);
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
        placeholder="Name"
        onChange={(e) => handleChange(e, name)}
        value={playerInfo.name}
      />
      <br/>
      <TextField
        placeholder="Date of birth"
        onChange={(e) => handleChange(e, playerInfo, dateOfBirth)}
        value={playerInfo.dateOfBirth}
      />
      <br/>
      <TextField
        placeholder="Location" 
        onChange={(e) => handleChange(e, playerInfo, location)}
        value={playerInfo.location}
      />
      <br/>
      <TextField 
        placeholder="Team"
        onChange={(e) => handleChange(e, playerInfo, team)}
        value={playerInfo.team}
      />
      <br/>
      <Button variant="outlined" label="Continue" onClick={(e) => forward(e, playerInfo)}></Button>
    </Box>
  )
};

export default InitialData;
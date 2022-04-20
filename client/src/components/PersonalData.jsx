import React from 'react';
import { AppBar, TextField, Toolbar, Button, IconButton, MenuIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';

const PersonalData = ({playerInfo, nextStep, prevStep, handleChange}) => {

  const forward = (e, playerInfo) => {
    e.preventDefault()
    nextStep(playerInfo);
  };

  const back = (e, playerInfo) => {
    e.preventDefault();
    prevStep(playerInfo);
  }

  const gender = 'gender';
  const sports = 'sports';
  const about = 'about';
  const interests = 'interests';
  const profileImage = 'profileImage';

  return (
    <Box sx={{flexgrow: 1}}>
      <AppBar title="Enter Personal Details"/>
        <Toolbar>
        </Toolbar>
      <AppBar/>
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, gender)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, sports)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, about)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, interests)}
      />
      <br/>
      <TextField 
        onChange={(e) => handleChange(e, playerInfo, profileImage)}
      />
      <br/>
      <Button variant="outlined" label="Continue" onClick={(e) => forward(e, playerInfo)}></Button>
      <Button variant="outlined" label="Back" onClick={(e) => back(e, playerInfo)}></Button>
    </Box>
  )
};

export default PersonalData;
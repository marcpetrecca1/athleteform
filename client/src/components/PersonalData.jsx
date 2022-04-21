import React from 'react';
import { AppBar, TextField, Toolbar, Button, IconButton, MenuIcon, Typography, Card, Grid } from '@mui/material';
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        borderRadius: '7px',
        boxShadow: 2,
        maxWidth: '325px',
        marginTop: '10vh',
        gap: '40px',
      }}
    >

    <Toolbar
      sx={{
        maxWidth: '400px',
        bgcolor: 'primary.main',
        color: 'white',
        fontFamily: 'default',
        justifyContent: 'center',
        fontSize: '18px',
        boxShadow: 1,
      }}
    >
    Enter Personal Details
    </Toolbar>

    <Box sx={{margin: 'auto', alignSelf: 'center', pb: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <TextField 
          placeholder='Gender'
          onChange={(e) => handleChange(e, playerInfo, gender)}
        />
        <TextField
          placeholder='Sports'
          onChange={(e) => handleChange(e, playerInfo, sports)}
        />
        <TextField 
          placeholder='About'
          onChange={(e) => handleChange(e, playerInfo, about)}
        />
        <TextField
          placeholder='Interests' 
          onChange={(e) => handleChange(e, playerInfo, interests)}
        />
        <TextField
          placeholder='Gender'
          onChange={(e) => handleChange(e, playerInfo, profileImage)}
        />
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button variant="outlined" label="Continue" onClick={(e) => forward(e, playerInfo)}
          sx={{
            alignSelf: 'center',
            py: '4px',
            px: '12px',
            fontWeight: 300,
          }}
        > 
        Continue 
        </Button>
        
        <Button variant="outlined" label="Back" onClick={(e) => back(e, playerInfo)}
          sx={{
            alignSelf: 'center',
            py: '4px',
            px: '12px',
            fontWeight: 300,
          }}
        > 
        Back 
        </Button>
      </Box>

    </Box>

    </Card>
  )
};

export default PersonalData;
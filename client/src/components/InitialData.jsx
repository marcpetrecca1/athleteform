import React from 'react';
import { AppBar, TextField, Toolbar, Button, IconButton, MenuIcon, Typography, Card, Grid } from '@mui/material';
import { palette, Box } from '@mui/system';

const InitialData = ({ playerInfo, nextStep, handleChange}) => {

  const forward = (e, playerInfo) => {
    e.preventDefault()
    nextStep(playerInfo);
  };

  const name = 'name';
  const dateOfBirth = 'dateOfBirth';
  const location = 'location';
  const team = 'team';

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        borderRadius: '6px',
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
        boxShadow: 2,
      }}
     >
     Create A Profile
    </Toolbar> 

    <Box sx={{margin: 'auto', alignSelf: 'center', pb: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <TextField 
          placeholder="Name"
          onChange={(e) => handleChange(e.target.value, name)}
          value={playerInfo.name}
        />
        <TextField
          placeholder="Date of birth"
          onChange={(e) => handleChange(e.target.value, dateOfBirth)}
          value={playerInfo.dateOfBirth}
        />
        <TextField
          placeholder="Location" 
          onChange={(e) => handleChange(e.target.value, location)}
          value={playerInfo.location}
        />
        <TextField 
          placeholder="Team"
          onChange={(e) => handleChange(e.target.value, team)}
          value={playerInfo.team}
        />
      </Box>

      <Box>
        <Button variant="outlined" label="Next" onClick={(e) => forward(e, playerInfo)}
          sx={{
            py: '4px',
            px: '12px',
            fontWeight: 300,
          }}
        >
        Next
        </Button>
      </Box>
    </Box>

    </Card>
  )
};

export default InitialData;
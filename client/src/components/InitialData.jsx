import React from 'react';
import { AppBar, TextField, Toolbar, Button, IconButton, MenuIcon, Typography, Card, Grid } from '@mui/material';
import { palette, Box } from '@mui/system';

const InitialData = ({nextStep, step, name, dateOfBirth, location, team, addName, addDOB, addLoc, addTeam}) => {

  const forward = (e, prev) => {
    e.preventDefault()
    nextStep(prev);
  };

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
          onChange={(e) => addName(e.target.value)}
          value={name}
        />
        <TextField
          placeholder="Date of birth"
          onChange={(e) => addDOB(e.target.value)}
          value={dateOfBirth}
        />
        <TextField
          placeholder="Location" 
          onChange={(e) => addLoc(e.target.value)}
          value={location}
        />
        <TextField 
          placeholder="Team"
          onChange={(e) => addTeam(e.target.value)}
          value={team}
        />
      </Box>

      <Box>
        <Button 
          variant="outlined" 
          label="Next" 
          onClick={(e) => forward(e, step)} 
          sx={{py: '4px', px: '12px', fontWeight: 300}}
        >
        Next
        </Button>
      </Box>

    </Box>

    </Card>
  )
};

export default InitialData;
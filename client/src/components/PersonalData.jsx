import React from 'react';
import { AppBar, TextField, Toolbar, Button, Card } from '@mui/material';
import { Box } from '@mui/system';

const PersonalData = ({nextStep, prevStep, step, gender, sports, about, interests, picture, addGender, addSports, addAbout, addInterests, addPicture}) => {

  const forward = (e, step) => {
    e.preventDefault()
    nextStep(step);
  };

  const back = (e, step) => {
    e.preventDefault();
    prevStep(step);
  }

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
    Enter Personal Details
    </Toolbar>

    <Box sx={{margin: 'auto', alignSelf: 'center', pb: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>

      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <TextField 
          placeholder='Gender'
          onChange={(e) => addGender(e.target.value)}
          value={gender}
        />
        <TextField
          placeholder='Sports'
          onChange={(e) => addSports(e.target.value)}
          value={sports}
        />
        <TextField 
          placeholder='About'
          onChange={(e) => addAbout(e.target.value)}
          value={about}
        />
        <TextField
          placeholder='Interests' 
          onChange={(e) => addInterests(e.target.value)}
          value={interests}
        />
        <TextField
          placeholder='Upload Profile Photo'
          onChange={(e) => addPicture(e.target.value)}
          value={picture}
        />
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button 
          variant="outlined" 
          label="Back" 
          onClick={(e) => back(e, step)} 
          sx={{py: '4px', px: '12px', fontWeight: 300}}
        > 
        Back 
        </Button>

        <Button 
          variant="outlined" 
          label="Continue" 
          onClick={(e) => forward(e, step)}
          sx={{py: '4px', px: '12px', fontWeight: 300}}
        > 
        Continue 
        </Button>
      </Box>

    </Box>

  </Card>
  )
};

export default PersonalData;
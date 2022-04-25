import React from 'react';
import { Box, display, maxWidth } from '@mui/system';
import { Toolbar, Button, Card, List, ListItem, autocompleteClasses } from '@mui/material';

const Confirm = ({prevStep, step, setStep, name, dateOfBirth, location, team, gender, sports, about, interests, picture, postProfile, reset}) => {

  const storage = {
    name: name,
    dateOfBirth: new Date(dateOfBirth),
    location: location,
    team: team,
    gender: gender,
    sports: [sports],
    about: about,
    interests: interests,
    photoImage: picture
  }

  const back = (e, step) => {
    e.preventDefault();
    prevStep(step);
  }

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    postProfile(obj);
    reset();
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
        pb: '40px'
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
    Confirm Details
    </Toolbar>

    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'default'}}>
        <ListItem>{name}</ListItem>
        <ListItem>{dateOfBirth}</ListItem>
        <ListItem>{location}</ListItem>
        <ListItem>{team}</ListItem>
        <ListItem>{gender}</ListItem>
        <ListItem>{sports}</ListItem>
        <ListItem>{about}</ListItem>
        <ListItem>{interests}</ListItem>
        <ListItem>{picture}</ListItem>
      </List>

      <Box sx={{display: 'flex', flexDirection: 'space-between'}}>
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
          label="Back" 
          sx={{py: '4px', px: '12px', fontWeight: 300}}
          onClick={(e) => {handleSubmit(e, storage)}}
          >
          Submit
        </Button>
      </Box>
    </Box>

    </Card>
  )
}

export default Confirm;
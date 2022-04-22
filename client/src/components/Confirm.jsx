import React from 'react';
import { Box } from '@mui/system';
import { Toolbar, Button, Card } from '@mui/material';

const Confirm = ({nextStep, prevStep, step, name, dateOfBirth, location, team, gender, sports, about, interests, picture, postProfile}) => {

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

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    postProfile(obj);
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
    Create A Profile
    </Toolbar>

    <Box>
      <Box>
      </Box>
      <Button onClick={(e) => {handleSubmit(e, storage)}}>
        Submit
      </Button>
    </Box>

    </Card>
  )
}

export default Confirm;
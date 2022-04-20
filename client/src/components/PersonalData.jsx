import React from 'react';

const PersonalData = ({playerInfo, nextStep, prevStep}) => {

  const forward = (e) => {
    e.preventDefault()
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
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
    </Box>
  )
};

export default PersonalData;
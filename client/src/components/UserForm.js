import React, {useState, useEffect} from 'react';
import InitialData from './InitialData.js';
import PersonalData from './PersonalData.js';
import Confirm from './Confirm.js';

const UserForm = () => {

  const [playerInformation, setPlayerInfo] = useState({
    step: 1,
    name: '',
    birthday: '',
    location: '',
    team: '',
    gender: '',
    sports: [],
    about: '',
    interests: '',
    profileImage: ''
  });

  const nextStep = (playerInformation) => {
    const { step } = playerInformation;
    setPlayerInfo({
      step: step + 1
    });
  };

  const prevStep = (playerInformation) => {
    const { step } = playerInformation;
    setPlayerInfo({
      step: step - 1
    });
  };

  const handleChange = (input, e) => {
    setPlayerInfo({
      [input]: e.target.value
    })
  }
  
  switch(playerInformation.step) {
    case 1:
      return (
        <InitialData nextStep={nextStep} handleChange={handleChange} playerInfo={playerInformation}/>
      )
    case 2: 
      return (
        <PersonalData prevStep={prevStep} handleChange={handleChange} playerInfo={playerInformation}/>
      )
    case 3:
      return (
        <Confirm prevStep={prevStep} playerInfo={playerInformation}/>
      )
  }
};

export default UserForm;
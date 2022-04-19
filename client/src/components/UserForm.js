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

  const nextStep = () => {
    const { step } = playerInformation;
    setPlayerInfo({
      step: step + 1
    });
  };

  const prevStep = () => {
    const { step } = playerInformation;
    setPlayerInfo({
      step: step - 1
    });
  };
  
  switch(step) {
    case 1:
      return (
        <InitialData/>
      )
    case 2: 
      return (
        <PersonalData/>
      )
    case 3:
      return (
        <Confirm/>
      )
  }
};

export default UserForm;
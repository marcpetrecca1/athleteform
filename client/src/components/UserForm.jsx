import React, {useState} from 'react';
import InitialData from './InitialData.jsx';
import PersonalData from './PersonalData.jsx';
import Confirm from './Confirm.jsx';
import ProfileList from './ProfileList.jsx';


const UserForm = () => {

  const [playerInformation, setPlayerInfo] = useState({
    step: 1,
    name:'',
    dateOfBirth:'',
    location:'',
    team:'',
    gender:'',
    sports:[],
    about:'',
    interests:'',
    profileImage:''
  });

  const [playerList, setPlayerlist] = useState([])

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

  // const handleChange = (e, playerInformation, input) => {
  //   let newState = JSON.parse(JSON.stringify(playerInformation));
  //   newState[input] = e.target.value;
  //   setPlayerInfo(newState);
  // }

    const handleChange = (value, input) => {
      setPlayerInfo({
        [input]: value
      })
    }
  
  switch(playerInformation.step) {
    case 1:
      return (
        <InitialData nextStep={nextStep} handleChange={handleChange} playerInfo={playerInformation} />
      )
    case 2: 
      return (
        <PersonalData nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} playerInfo={playerInformation}/>
      )
    case 3:
      return (
        <Confirm prevStep={prevStep} playerInfo={playerInformation}/>
      )
  }
};

export default UserForm;
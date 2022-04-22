import React, {useState} from 'react';
import InitialData from './InitialData.jsx';
import PersonalData from './PersonalData.jsx';
import Confirm from './Confirm.jsx';
import ProfileList from './ProfileList.jsx';


const UserForm = () => {

  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const [team, setTeam] = useState('');
  const [gender, setGender] = useState('');
  const [sports, setSports] = useState('');
  const [about, setAbout] = useState('');
  const [interests, setInterests] = useState('');
  const [picture, setPicture] = useState('');
  const [profiles, setList] = useState([]);

  const nextStep = (step) => {
    setStep(step + 1);
  };

  const prevStep = (step) => {
    setStep(step - 1);
  };
  
  const addName = (value) => {
    setName(value);
  };

  const addDOB = (value) => {
    setDateOfBirth(value);
  };

  const addLoc = (value) => {
    setLocation(value);
  };

  const addTeam = (value) => {
    setTeam(value);
  }

  const addGender = (value) => {
    setGender(value)
  }

  const addSports = (value) => {
    setSports(value)
  }
  
  const addAbout = (value) => {
    setAbout(value)
  }

  const addInterests = (value) => {
    setInterests(value)
  }

  const addPicture = (value) => {
    setPicture(value)
  }

  const addProfile = (profile, prevState) => {
    prevState.push(profile);
    setList(prevState);
  }
  
  switch(step) {
    case 1:
      return (
        <React.Fragment>
          <InitialData 
            nextStep={nextStep} 
            step={step} 
            name={name} 
            dateOfBirth={dateOfBirth} 
            location={location} 
            team={team}
            addName={addName} 
            addDOB={addDOB}
            addLoc={addLoc}
            addTeam={addTeam}
          />
          <ProfileList profiles={profiles}/>
        </React.Fragment>
      )
    case 2: 
      return (
        <PersonalData 
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          gender={gender}
          sports={sports}
          about={about}
          interests={interests}
          picture={picture}
          addGender={addGender}
          addSports={addSports}
          addAbout={addAbout}
          addInterests={addInterests}
          addPicture={addPicture}
        />
      )
    case 3:
      return (
        <Confirm prevStep={prevStep} profiles={profiles} addProfile={addProfile}/>
      )
  }
};

export default UserForm;
import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton'

const InitialData = ({nextStep, handleChange}) => {

  const moveForward = (e) => {
    e.preventDefault()
    nextStep();
  };

  return (
    <div></div>
  )
};

export default InitialData;
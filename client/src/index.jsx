import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './components/UserForm.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
  
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <UserForm/>
      </React.Fragment>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
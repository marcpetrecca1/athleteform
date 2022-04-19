import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './components/UserForm';

const App = () => {
  return (
      <UserForm/>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
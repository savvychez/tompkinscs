import React from 'react';
import AuthProvider, { useAuth } from '../components/AuthProvider';
import AuthRouter from '../components/AuthRouter';
import '../styles/App.css';
// import Data from './Data';

const App = () => {
  let x = useAuth()
  console.log(x)
  return (
    <AuthProvider>
      <AuthRouter/>
    </AuthProvider>
  );
}

export default App;

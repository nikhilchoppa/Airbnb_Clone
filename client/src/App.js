import React from 'react';
import "./styles/app.css";
import "./styles/home.css";
import "./styles/loginForm.css";
import "./styles/header.css";
import "./styles/updateDp.css";
import "./styles/vendorProposal.css";
import "./styles/eachProposal.css";
import "./styles/newProposal.css";
import "./styles/eachProposal.css"
import { AppRouter } from './routers/AppRouter';
import UserContext from './contexts/UserContext';

const App = () => {
  return <>
    <UserContext>
      <AppRouter />
    </UserContext>
  </>
}

export default App;
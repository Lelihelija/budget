import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import axios from "axios";

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

//styles
import './App.scss';

function App() {
  let [token, setToken] = useState(true);

  // componentDidMount() {
  //   axios.get("/api/users").then((response) => {
  //     console.log(response);
  //   });
  // }

  return (
    <div className="app">
      <Container>
        <div className="app__inner">
          <button type="button" onClick={() => setToken(!token)}>Залогінити/розлогінити. тик-тик</button>
          <Header token={token}/>
          <Main token={token}/>
          <Footer/>
        </div>
      </Container>
    </div>
  );
};

export default App;

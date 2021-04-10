import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import axios from "axios";

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

//styles
import './App.scss';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("/api/users").then((response) => {
      console.log(response);
    });
  }

  render() {
    // const { users } = this.state;

    return (
      <div className="app">
        <Container>
          <div className="app__inner">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </Container>
      </div>
    );
  }
};

export default App;

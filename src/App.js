import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";

//styles
import './App.scss';

class App extends Component {

  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="app">
        <Container>
          <div className="app__inner">
            <div className="users-wrapper">
              {users.map((user, index) => (
                <ul className="user" key={index}>
                  <p className="user__name">Name: <span>{user.name}</span></p>
                  <p className="user__email">Email: <span>{user.email}</span></p>
                  {/* <p className="user__city">City: <span>{user.adress.city}</span></p> */}
                </ul>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

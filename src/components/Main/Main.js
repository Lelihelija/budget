import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

//liraries
import Calendar from 'react-calendar'

//components
import ExpencesItem from '../ExpencesItem/ExpencesItem';

class Main extends Component {

  state = {
    date: new Date(),
    expences: [
      {
        id: 1,
        title: 'Food',
        amount: 40,
      },
      {
        id: 2,
        title: 'Sport',
        amount: 30,
      },
    ],
  };

  onChange = date => this.setState({date});

  amountChange(id, amount) {
    console.log('hello from edit', id, amount);
  }

  expenceDelete(id) {
    console.log('hello from delete', id);
  }

  render() {
    const { expences } = this.state;

    return (
      <div className="main">
        <form className="main__form">
          <Row>
            <Col xs="24" md="14" className="main__calendar">
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
              />
            </Col>
            <Col xs="24" md="10" className="main__inputs">
              <label className="main__amount">
                <input type="text" placeholder="Spent amount" className="my-input-default"/>
              </label>
              <label className="main__category">
                <input type="text" placeholder="Category" className="my-input-default"/>
              </label>
              <button className="main__submit-btn" type="submit">Create entry</button>
            </Col>
          </Row>
        </form>
        <Row>
          <Col xs="24" className="main__info">
            <span className="main__info-title">Day spendings</span>
            <div className="main__info-wrapper">
              {
                expences.map((item, index) => (
                  <ExpencesItem data={item} key={index} changeListener={(id, amount) => this.amountChange(id, amount)}
                  deleteListener={id => this.expenceDelete(id)}/>
                ))
              }

              {/* <div className="main__info-item"><span>Food</span></div>
              <div className="main__info-item">{expences[0].food}$</div>
              <div className="main__info-item"><button className="my-button-default">Edit</button></div>
              <div className="main__info-item"><button className="my-button-default">Delete</button></div> */}
              
              {/* <div className="main__info-item"><span>Sport</span></div>
              <div className="main__info-item">{expences[0].sport}$</div>
              <div className="main__info-item"><button className="my-button-default">Edit</button></div>
              <div className="main__info-item"><button className="my-button-default">Delete</button></div> */}

              <div className="main__info-item"><span>Total</span></div>
              {/* <div className="main__info-item">{expences[0].sport + expences[0].food}$</div> */}
              <div className="main__info-item">{expences.map(item => item.amount).reduce((acc = 0, item) => acc + item)}$</div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

};

export default Main;

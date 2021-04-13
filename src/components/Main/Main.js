import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

//liraries
import Calendar from 'react-calendar';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//components
import { TextFieldFormik } from '../../js/TextFieldFormik';
import ExpencesItem from '../ExpencesItem/ExpencesItem';

class Main extends Component {

  state = {
    date: '',
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
    initial: {
      amount: 0,
      category: '',
    },
  };

  onChange = data => {this.setState({date: data}); console.log(this.state.date)};
  onChangeEntry = e => {
  }

  amountChange(id, amount) {
    console.log('hello from edit', id, amount);
  }

  expenceDelete(id) {
    console.log('hello from delete', id);
  }

  render() {
    const { expences } = this.state;
    const { initial } = this.state;

    const validate = Yup.object({
      amount: Yup.number()
      .min(3, 'amount must have at least 3 numbers')
      .required('Amount is required')
      .positive(),
      category: Yup.string()
      .min(3, 'category must have at least 3 characters')
      .required('Category is required'),
    })

    return (
      <div className="main">
          <Row>
            <Col xs="24" md="14" className="main__calendar">
              <Calendar
                onChange={this.onChange}
                // activeStartDate={new Date()}
              />
            </Col>
            <Col xs="24" md="10" className="main__inputs">
              <Formik
                initialValues={{initial}}
                validationSchema={validate}
                onSubmit={(values, actions) => {
                  console.log(values, 'main component');
                  // actions.setSubmitting(false);
                }}
              >
              {props => (
                <Form>
                  <TextFieldFormik
                  label="Enter your spent amount"
                  name="amount"
                  type="number"
                  />
                  <TextFieldFormik
                  label="Enter a category"
                  name="category"
                  type="text"
                  />
                  <button className="main__submit-btn" type="submit">Create entry</button>
                </Form>
              )}
              </Formik>
            </Col>
          </Row>
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

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
      {
        id: 3,
        title: 'Sport',
        amount: 50,
      },
      {
        id: 4,
        title: 'Sport',
        amount: 60,
      },
      {
        id: 5,
        title: 'Sport',
        amount: 70,
      },
      {
        id: 6,
        title: 'Sport',
        amount: 80,
      },
    ],
    initial: {
      amount: 0,
      category: '',
    },
  };

  onChange = data => {this.setState({date: data}); console.log(this.state.date)};

  amountChange(id, a) {
    this.setState({
      ...this.state,
      expences: this.state.expences.map((item, i) => item.id === id ? {...item, amount: a}: item)
    });
  }

  expenceDelete(id) {
    const newExpences = [...this.state.expences];

    newExpences.splice([...this.state.expences].map(item => item.id).indexOf(id), 1);
    this.setState({
      ...this.state,
      expences: newExpences
    });
    console.log('hello from delete', id, this.state.expences); 
  }

  render() {
    const { expences } = this.state;
    const { initial } = this.state;
    const { token } = this.props;
    console.log(token);

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
        {token ?
            <>
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
                  {
                    expences.length ?
                        <>
                          <div className="main__info-wrapper">
                            {
                              expences.map((item, index) => (
                                <ExpencesItem data={item} key={index} amountChange={this.amountChange.bind(this)}
                                expenceDelete={this.expenceDelete.bind(this)}/>
                              ))
                            }
                          </div>
                          <div className="main__info-total-wrapper">
                            <span className="main__info-total">Total</span>
                            <span className="main__info-total-amount">{expences.map(item => item.amount).reduce((acc = 0, item) => acc + item)}$</span>
                          </div>
                        </>
                      :
                        <div className="main__info-item">Ви ще нічого не добавили! Замовте хачапурі у будці за рогом.</div>
                  }
              </Col>
            </Row>
          </>
        :
          <div className="main__noaccess">Login or create an account</div>
        }
      </div>
    )
  }

};

export default Main;

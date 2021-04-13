import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import Login from '../Login/Login';

function Header ({token}) {
  const userName = 'Ai-chan';

  return (
    <Row className="header">
      <Col xs="24" md="14" xl="16" ><h2 className="header__title">Budget Tracker</h2></Col>
      <Col xs="24" md="10" xl="6" className="header__user">
        <span className="header__user-username">{token ? `Hello ${userName}` : ''}</span>
        {token ? '' : <Login/>}
      </Col>
    </Row>
  )
};

export default Header;

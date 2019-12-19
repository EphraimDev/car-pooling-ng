import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Signin from '../../containers/Signin/Signin';
import Signup from '../../containers/Signup/Signup';

const Signin_up = () => {
  const [view, setView] = useState('signin');
  return (
    <section className="auth-container row">
        <div className='col-md-6 auth-page-image-div'>
          <img className="auth-page-image" src="assets/images/auth-page.jpg" />
        </div>
        <div id='signin' className='col-md-6 auth-page-auth '>
          <div className="col-md-2 col-xl-3 auth-page-auth-section"></div>
          <div className="row col-sm-12 col-md-8 col-xl-6 auth-page-homepage-link auth-page-auth-section">
            <div className="row" style={{width: "100%",height: "30px"}}><FontAwesomeIcon icon={faCoffee} /><Link to='/'>Go back</Link></div>
            <div className='row mt-5'>
              <div className='col'>
                <button
                  className='buttn btn btn-lg'
                  onClick={() => {
                    setView('signin');
                  }}>
                  Signin
                </button>
              </div>

              <div className='col'>
                <button
                  className='buttn btn btn-lg'
                  onClick={() => {
                    setView('signup');
                  }}>
                  Signup
                </button>
              </div>
            </div>

            <div className=''>
            {' '}
            {view === 'signin' ? (
              <Fragment>
                <Signin />
                <br />
                <p>
                  Don't have an account? <Link to='#'>Register</Link>
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <Signup />
                <br />
                <p>
                  Already have an account? <Link to='#'>Sign In</Link>
                </p>
              </Fragment>
            )}
          </div>
              
          </div>
        </div>
    </section>
  );
};

export default Signin_up;

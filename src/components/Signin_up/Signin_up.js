import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Signin from '../../containers/Signin/Signin';
import Signup from '../../containers/Signup/Signup';

const Signin_up = () => {
  const [view, setView] = useState('signin');
  return (
    <section>
      <div id='cnt' className='row'>
        <div id='img' className='col' />
        <div id='signin' className='col '>
          <Link to='/'>Go back</Link>
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

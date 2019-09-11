import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
const Signin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={e => onChange(e)}
          value={email}
          className='form-control no-border mt-3'
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={e => onChange(e)}
          value={password}
          className='form-control no-border mt-3'
          type='password'
          name='password'
          placeholder='Password'
        />
        <input className='btn btn-primary mt-3' type='submit' name='submit' />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Signin);

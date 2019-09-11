import React, { useState } from 'react';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Signup = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const { first_name, last_name, email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    register(first_name, last_name, email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      {' '}
      <form onSubmit={onFormSubmit}>
        <input
          onChange={e => onChange(e)}
          className='form-control no-border mt-3'
          type='text'
          name='first_name'
          value={first_name}
          placeholder='First Name'
        />
        <input
          onChange={e => onChange(e)}
          className='form-control no-border mt-3'
          type='text'
          name='last_name'
          value={last_name}
          placeholder='Last Name'
        />
        <input
          onChange={e => onChange(e)}
          className='form-control no-border mt-3'
          type='text'
          name='email'
          value={email}
          placeholder='Email'
        />
        <input
          onChange={e => onChange(e)}
          className='form-control no-border mt-3'
          type='password'
          name='password'
          value={password}
          placeholder='Password'
        />
        <input
          className='btn btn-primary mt-3'
          type='submit'
          name='submit'
          id=''
        />
      </form>
    </div>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { register }
)(Signup);

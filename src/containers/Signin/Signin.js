import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
const Signin = ({ login, history }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    login(email, password, history);
  };

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

export default connect(
  null,
  { login }
)(Signin);

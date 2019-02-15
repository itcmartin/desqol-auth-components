import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Registration from '../Registration'
import Login from '../Login'
import Profile from '../Profile'
import Logout from '../Logout'
import EmailInput from '../EmailInput'
import PasswordInput from '../PasswordInput'
import DisplayNameInput from '../DisplayNameInput'
import Pineapple from '../Pineapple'

storiesOf('Registration', module).add('default', () =>
  <Registration onRegister={action('register')} />);

storiesOf('Login', module).add('default', () =>
  <Login onLogin={action('login')} />);

storiesOf('Profile', module).add('default', () =>
  <Profile onUpdate={action('update')} />);

storiesOf('Logout', module).add('default', () =>
  <Logout onLogout={action('logout')} />);

storiesOf('EmailInput', module).add('default', () =>
  <EmailInput onChange={action('change')} />);

storiesOf('PasswordInput', module)
  .add('with confirmation', () =>
    <PasswordInput showConfirm={true} onChange={action('change')} />)
  .add('without confirmation', () =>
    <PasswordInput showConfirm={false} onChange={action('change')} />)

storiesOf('DisplayNameInput', module).add('default', () =>
  <DisplayNameInput onChange={action('change')} />);

storiesOf('Pineapple', module)
	.add('01', () => <Pineapple  />)
	.add('02', () => <Pineapple emotion="02" />)
	.add('03', () => <Pineapple emotion="03" />)
	.add('04', () => <Pineapple emotion="04" />)
	.add('05', () => <Pineapple emotion="06" />)
	.add('06', () => <Pineapple emotion="07" />)
	
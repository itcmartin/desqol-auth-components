import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Registration from '../Registration'
import Login from '../Login'
import Profile from '../Profile'
import Logout from '../Logout'
import EmailInput from '../EmailInput'
import PasswordInput from '../PasswordInput'
import DisplayNameInput from '../DisplayNameInput'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Registration', module).add('default', () => <Registration />);

storiesOf('Login', module).add('default', () => <Login />);

storiesOf('Profile', module).add('default', () => <Profile />);

storiesOf('Logout', module).add('default', () => <Logout />);

storiesOf('EmailInput', module).add('default', () => <EmailInput />);

storiesOf('PasswordInput', module)
  .add('with confirmation', () => <PasswordInput showConfirm={true}
                                      onConfirmedPasswordChange={action('change')} />)
  .add('without confirmation', () => <PasswordInput showConfirm={false}
                                      onConfirmedPasswordChange={action('change')}/>)

storiesOf('DisplayNameInput', module).add('default', () => <DisplayNameInput />);

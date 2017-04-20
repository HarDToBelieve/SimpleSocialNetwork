import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function FieldGroup({ id, label, help, type}) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={type}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class Login extends React.Component {

  render() {
      return (
        <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="username"
            placeholder="Your username"
          />
          <FieldGroup
            id="formControlsPassword"
            label="password"
            type="password"
          />
          <LinkContainer to="newfeed">
            <Button type="submit">
              Login
            </Button>
          </LinkContainer>
          <LinkContainer to="register">
            <Button type="submit">
              Register
            </Button>
          </LinkContainer>
        </form>
      );
  }
}

export default Login;

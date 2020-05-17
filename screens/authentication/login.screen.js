
import * as React from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'

function LoginAuthScreen(props) {
  const dispatch = useDispatch()

  let logIn = () => {
    dispatch(actions.userActions.setUserLogged({ email: 'alberto@gmail.com', token: '123456'}))
  }

  return (
    <Container>
      <Content>
        <Button onPress={logIn} light>
          <Text> 
            Log in
          </Text>
        </Button>
      </Content>
    </Container>
  );
}

export default LoginAuthScreen
import * as React from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'


function HomeMainScreen(props) {
  const dispatch = useDispatch()

  const goSecondHomeScreen = () => {
    props.navigation.navigate('HomeSecond')
  }

  const logOut = () => {
    dispatch(actions.userActions.setUserLoggedout())
  }

  return (
      <Container>
        <Content>
          <Button onPress={goSecondHomeScreen} light>
            <Text> 
              Go second child route 
            </Text>
          </Button>
          <Button onPress={logOut} light>
            <Text> 
              Logout
            </Text>
          </Button>
        </Content>
      </Container>
  );
}

export default HomeMainScreen
import * as React from 'react';
import { Container, Content, Button, Text } from 'native-base';

function SettingsMainScreen(props) {

  const goSecondHomeScreen = () => {
    props.navigation.navigate('SettingsSecond')
  }

  return (
      <Container>
        <Content>
          <Button onPress={goSecondHomeScreen} light>
            <Text> 
              Go second child route 
            </Text>
          </Button>
        </Content>
      </Container>
  );
}

export default SettingsMainScreen
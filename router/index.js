import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoggedNavigator from './navigators/logged.navigator'
import AuthNavigator from './navigators/auth.navigator'

import { useSelector } from 'react-redux'


function AppNavigator() {
    const userState = useSelector(state => state.userState)
    console.log("User state from redux: ", userState)
    return(
        <NavigationContainer>
            { userState.isUserLogged ? <LoggedNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavigator
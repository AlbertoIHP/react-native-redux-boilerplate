import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SettingsMainScreen from '../../screens/settings/main.screen'
import SettingsSecondScreen from '../../screens/settings/second.screen'


const SettingsStack = createStackNavigator();

function SettingsStackBuilder() {

    return(
    <SettingsStack.Navigator>
        <SettingsStack.Screen 
            name="SettingsMain" 
            component={SettingsMainScreen} 
            options={
                { 
                    title: 'First child route of Settings Stack'
                }
            } />
        <SettingsStack.Screen 
            name="SettingsSecond" 
            component={SettingsSecondScreen} 
            options={
                { 
                    title: 'Second child route of Settings Stack'
                }
            }/>
    </SettingsStack.Navigator>
    )
}

export default SettingsStackBuilder
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackBuilder from '../stacks/home.stack'
import SettingsStackBuilder from '../stacks/settings.stack'


import TabBarIcon from '../../components/TabBarIcon';

const Tab = createBottomTabNavigator()

function LoggedNavigator() {
    return(
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeStackBuilder} 
            options={{
                title: 'Home Tab',
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
            }}/>
          <Tab.Screen 
            name="Settings" 
            component={SettingsStackBuilder} 
            options={{
                title: 'Settings Tab',
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
            }}/>
        </Tab.Navigator>       
    )
}

export default LoggedNavigator
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeMainScreen from '../../screens/home/main.screen'
import HomeSecondScreen from '../../screens/home/second.screen'


const HomeStack = createStackNavigator();

function HomeStackBuilder() {
    return(
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="HomeMain" 
            component={HomeMainScreen} 
            options={
                { 
                    title: 'First child route of Home Stack'
                }
            } />
        <HomeStack.Screen 
            name="HomeSecond" 
            component={HomeSecondScreen} 
            options={
                { 
                    title: 'Second child route of Home Stack'
                }
            } />
    </HomeStack.Navigator>
    )
}

export default HomeStackBuilder
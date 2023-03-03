import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Events  from "../components/views/Events";
import Entries  from "../components/views/Entries";
import Promoters  from "../components/views/Promoters";

import { Colors } from '../assets/colors';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Events' component={Events}/>
      <Tab.Screen name='Entries' component={Entries}/>
      <Tab.Screen name='Promoters' component={Promoters}/>
    </Tab.Navigator>
  </NavigationContainer>
}
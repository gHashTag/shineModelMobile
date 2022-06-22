import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UI } from './screens'
import { RootStackParamList } from './types/NavTypes'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={UI} name="UI" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

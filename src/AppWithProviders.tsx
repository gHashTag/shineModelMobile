import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import { Navigation } from './Navigation'
import { useColorScheme } from 'react-native'
import { customDark, customLight } from './themes'
import { NavigationContainer } from '@react-navigation/native'

export function AppWithProviders() {
  const curTheme = useColorScheme() === 'dark' ? customDark : customLight
  return (
    <SafeAreaProvider>
      <PaperProvider theme={curTheme}>
        <NavigationContainer theme={curTheme}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

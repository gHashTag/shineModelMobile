import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './Navigation'

export function AppWithProviders() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

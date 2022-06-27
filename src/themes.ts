import { DarkTheme, DefaultTheme } from 'react-native-paper'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'

export const paperDarkTheme = {
  ...DarkTheme,
  dark: true,
  version: 3,
  colors: {
    ...DarkTheme.colors
  }
}
export const paperLightTheme = {
  ...DefaultTheme,
  version: 3,
  dark: true,
  colors: {
    ...DefaultTheme.colors
  }
}
export const customLight = {
  ...NavigationDefaultTheme,
  ...paperLightTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...paperLightTheme.colors
  }
}
export const customDark = {
  ...NavigationDarkTheme,
  ...paperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...paperDarkTheme.colors
  }
}

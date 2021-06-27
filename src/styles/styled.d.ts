import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      purple: string
      black: string
      shadow: string
      danger: string
      red: string
      white: {
        background: string
        details: string
        other: string
        secondary: string
      }
      gray: {
        dark: string
        medium: string
        light: string
        other: string
      }
      pink: {
        dark: string
        light: string
        medium: string
      }
      hover: {
        purple: string
        danger: string
        grayMedium: string
        grayLight: string
      }
    }
  }
}
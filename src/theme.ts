import styled from "styled-components"

type Theme = {
  colors: {
    background: string
    title: string
  }
}

type Themes = Record<'ligth' | 'dark', Theme>

const theme: Themes = {
  dark: {
    colors: {
      background: '#000',
      title: ''
    }
  },
  ligth: {
    colors: {
      background: '#fff',
      title: ''
    }
  }
}
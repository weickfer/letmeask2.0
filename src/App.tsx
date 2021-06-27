import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { AppProvider } from './hooks/provider';
import { usePersistedState } from './utils/usePersistedState';
import { Routes } from './routes'

import { ThemeSwictcher } from './components/ThemeSwitcher';

import { GlobalStyle } from './styles/globals';
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', darkTheme)

  const handleToggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <ThemeSwictcher onClick={handleToggleTheme} />
          <Routes />
        </AppProvider>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;

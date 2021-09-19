import store from '../redux/create_store.js'
import React from 'react'
import { theme } from 'application/styles/theme'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './pages/_routes'

const App = () => {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
}

export default App
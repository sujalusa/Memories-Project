import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { StylesProvider, ThemeProvider as StylesThemeProvider } from '@mui/styles';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <StylesThemeProvider theme={theme}>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </StylesThemeProvider>
        </StylesProvider>
    </Provider>
);

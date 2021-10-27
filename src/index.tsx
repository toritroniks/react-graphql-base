import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import apolloClient from './lib/api/apolloClient';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

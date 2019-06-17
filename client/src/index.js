import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'
import { Provider } from 'react-redux'
import store from './redux'
import Container from './components'

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);

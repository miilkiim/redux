import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister();

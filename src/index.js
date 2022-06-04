import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './components/redux/storeR';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode >
        <Provider store={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </Provider>
    </React.StrictMode>
)



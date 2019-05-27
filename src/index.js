import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';

const MyStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
)

ReactDOM.render(<MyStore />, document.getElementById('root'));


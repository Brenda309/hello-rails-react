import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
);

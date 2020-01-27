import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const application = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));

serviceWorker.unregister();

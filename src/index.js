import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.css';
import './index.css';
import AppRouter from './routers/AppRouter';
import { configureStore } from './components/store/configureStore';
import * as serviceWorker from './serviceWorker';


const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
   <Provider store={store}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
   </Provider>, 
    rootEl );
}

if(module.hot){
    module.hot.accept('./routers/AppRouter', () => {
        setTimeout(render)
    })
}


render();



serviceWorker.register();

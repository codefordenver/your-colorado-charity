import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CharityLayout from './CharityLayout';
//import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <Route path="/" render={props => { const subdomain = window.location.hostname.split('.'); 
            if (subdomain && subdomain.length > 1) 
                return <CharityLayout {...props} subdomain={subdomain[0]}/>; 
            return <App {...props}/>; }}
            />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);

    // old code
    // import { HashRouter } from 'react-router-dom'
    // <HashRouter>
    //     <ScrollToTop>
    //         <App></App>
    //     </ScrollToTop>
    // </HashRouter>,

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
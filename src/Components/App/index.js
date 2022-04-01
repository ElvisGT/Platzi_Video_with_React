import React from 'react';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';
import {Main} from '../Main/index';
import './app.css';

function App () {
    return (
        <div className="app">
                <Header />
                <Main />
                <Footer />
        </div>
    )
}


export {App};
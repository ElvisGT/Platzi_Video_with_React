import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import Home from '../Components/App/Home';
import Login from '../Components/Login/index';
import Register from '../Components/Register/index';
import {NotFound} from '../Components/NotFound/index';
import {Layout} from '../Components/Layout/index';
import Player from '../Components/Player/index';


const App = () => (
    <HashRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/player/:id" element={<Player />} />
                <Route  path="*" element={<NotFound />}/>
            </Routes>
        </Layout>
    </HashRouter>
);



export {App};

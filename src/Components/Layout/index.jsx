import React from 'react';
import {Footer} from '../Footer/index';
import {Header} from '../Header/index';


const Layout = ({children}) => {
    return (
        <React.Fragment>
        
            <Header />
            {children}
            <Footer />
        
        </React.Fragment>
        
    );


}


export {Layout};
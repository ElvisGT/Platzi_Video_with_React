import React from 'react';
import {Footer} from '../Footer/index';
import {Header} from '../Header/index';
import {reducer} from '../../reducers/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {useInitialState} from '../../hooks/useInitialState';




const Layout = ({children}) => {
    const listTrends = useInitialState();


    const initialState = {
        "myList":[],
        "user":{},
        'trends':listTrends

    }
    
    const store = createStore(reducer,initialState)

    return (
        <React.Fragment>
            <Provider store={store}>
                <Header />
                {children}
                <Footer />
            </Provider>
        </React.Fragment>
        
    );


}


export {Layout};
import React,{useState,useEffect} from 'react';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import {CarouselItem} from '../CarouselItem/index';
import {useInitialState} from '../../hooks/useInitialState';

import './app.css';

const API_titles = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5';
const API_photos = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';

const App = () => {
    const initialState = useInitialState(API_titles,API_photos);

    
    return initialState.length === 0 ? <h1>Cargando...</h1> :(
        <div className="app">
                <Header />
                <Search />
                
                
                
               
                <Categorias tittle="Mas vistos">
                    <Carousel>
                    {
                        initialState.slice(0,4).map(item => (

                                <CarouselItem key={item.id} {...item} />
                            ))
}
                        
                        
                    
                    </Carousel>
                </Categorias> 
                
                {/* <Categorias tittle="Variados">
                    <Carousel>
                    {initialStateTitles.map(item => (
                                    initialStatePhotos.map(item2 => (

                                        <CarouselItem key={item.id} {...item2}/>
                                    ))
                                    
                                ))

                                }
                    </Carousel>
                </Categorias> */}
                
                <Footer />
        </div>
    )

    
}


export {App};
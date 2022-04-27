import React from 'react';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import {CarouselItem} from '../CarouselItem/index';
import {useInitialState} from '../../hooks/useInitialState';

import './app.css';

const API_titles = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5';
const API_photos = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';

const Home = () => {
    const initialState = useInitialState(API_titles,API_photos);

    
    return initialState.length === 0 ? <h1>Cargando...</h1> :(
        <div className="app">
                
                <Search />


                <Categorias tittle="Favoritos">
                   
                </Categorias> 
               
                <Categorias tittle="Mas vistos">
                    <Carousel>
                    {
                        initialState.slice(0,4).map(item => (

                                <CarouselItem key={item.id} {...item} />
                            ))

                    }
                    </Carousel>
                </Categorias> 
                
                <Categorias tittle="Variados">
                    <Carousel>
                    {
                        initialState.slice(0,4).map(item => (

                            <CarouselItem key={item.id} {...item} />
                        ))

                    }
                    </Carousel>
                </Categorias>
                
        </div>
    )

    
}


export {Home};
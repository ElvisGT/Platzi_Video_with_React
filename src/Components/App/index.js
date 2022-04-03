import React,{useState,useEffect} from 'react';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import {CarouselItem} from '../CarouselItem/index';
import {useInitialState} from '../../hooks/useInitialState';

import './app.css';

const API = 'https://elvisgt.github.io/datos/initalState.json';

const App = () => {
    const initialState = useInitialState(API);
    
    return initialState.length === 0 ? <h1>Cargando...</h1> :(
        <div className="app">
                <Header />
                <Search />

                
                {initialState.length !== 0 &&
                    initialState.myList &&
                        initialState.length > 0  &&
                        <Categorias tittle="Mi lista">
                            <Carousel>
                                {initialState.myList.map(item => (
                                    
                                    <CarouselItem key={item.id} {...item}/>
                                ))

                                }
                            </Carousel>
                        </Categorias>
                }
                
               
                <Categorias tittle="Mas vistos">
                    <Carousel>
                        {initialState.length !== 0 &&
                            initialState.mas_vistos.map(item => (
                                <CarouselItem key={item.id} {...item} />
                            ))
                        }
                    </Carousel>
                </Categorias> 
                
                <Categorias tittle="Variados">
                    <Carousel>
                        {initialState.length !== 0 &&
                            initialState.variados.map(item => (
                                <CarouselItem key={item.id} {...item} />
                            ))
                        }
                    </Carousel>
                </Categorias>
                
                <Footer />
        </div>
    )

    
}


export {App};
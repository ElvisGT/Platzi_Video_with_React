import React from 'react';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import {CarouselItem} from '../CarouselItem/index';

import './app.css';

function App () {
    return (
        <div className="app">
                <Header />
                <Search />
                <Categorias tittle="Mi lista">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                <Categorias tittle="Mas vistos">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                <Categorias tittle="Favoritos">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                
                <Footer />
        </div>
    )
}


export {App};
import React,{useState,useEffect} from 'react';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import {CarouselItem} from '../CarouselItem/index';

import './app.css';

const App = () => {
    const [videos,setVideos] = useState([]);

    useEffect(() => {
            fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))

    },[]);

    console.log(videos);

    return (
        <div className="app">
                <Header />
                <Search />
                <Categorias tittle="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                <Categorias tittle="Mas vistos">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                <Categorias tittle="Variados">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categorias>
                
                <Footer />
        </div>
    )
}


export {App};
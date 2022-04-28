import React from 'react';
import {connect} from 'react-redux';
import {Search} from '../Search/index';
import {Categorias} from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import CarouselItem from '../CarouselItem/index';

import './app.css';



const Home = ({myList,trends}) => {
    
    return (
        <div className="app">
                
                <Search />


                {myList.length > 0 &&
                <Categorias tittle="Favoritos">
                   <Carousel>
                        {
                           myList.map(item => (
                            <CarouselItem key={item.id} {...item} />
                           ))
                        }
                   </Carousel>
                </Categorias> 
                }
               
                <Categorias tittle="Mas vistos">
                    <Carousel>
                    {trends !== undefined &&
                        trends.map(item => (
                                <CarouselItem key={item.id} {...item} />
                            ))

                    }
                    </Carousel>
                </Categorias> 
                
                <Categorias tittle="Variados">
                    <Carousel>
                    {trends !== undefined &&
                        trends.map(item => (

                            <CarouselItem key={item.id} {...item} />
                        ))

                    }
                    </Carousel>
                </Categorias>
                
        </div>
    )

    
}

const mapStateToProps = (state) => {
    return {
        myList:state.myList,
        trends:state.trends
    }
}

export default connect(mapStateToProps,null)(Home);
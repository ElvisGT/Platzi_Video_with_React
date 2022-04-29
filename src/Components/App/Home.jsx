import React from 'react';
import {connect} from 'react-redux';
import {Search} from '../Search/index';
import Categorias from '../Categorias/index';
import {Carousel} from '../Carousel/index';
import CarouselItem from '../CarouselItem/index';

import './app.css';



const Home = ({myList,trends,user}) => {
    return (
        <div className="app">
                 {Object.keys(user).length > 0  &&
                    <h1 className="app-welcome">
                        Bienvenido,
                        {' '} 
                        <span className="app-welcome-user" >
                            {user.name}
                        </span>
                    </h1>
                }
                <Search />

                {myList.length > 0 &&
                <Categorias tittle="Favoritos" myList={myList.length}>
                   <Carousel>
                        {
                           myList.map(item => (
                            <CarouselItem 
                            key={item.id}
                             {...item}
                             isList
                              />
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
        trends:state.trends,
        user:state.user,
    }
}

export default connect(mapStateToProps,null)(Home);
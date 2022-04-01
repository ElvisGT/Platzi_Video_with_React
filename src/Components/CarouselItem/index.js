import React from 'react';
import './carouselItem.css';

function CarouselItem () {
    return (
        <React.Fragment>
            <div className="carousel-item">
                <img className="carousel-item__img" src="https://images.pexels.com/photos/4944956/pexels-photo-4944956.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="people" />
                <div className="carousel-item__details">
                    <div className="carousel-item_details-img">
                        <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" alt="Play" />
                        <img src="https://img.icons8.com/fluency/48/000000/plus.png" alt="Plus" />
                    </div>
                    <p className="carousel-item__details--title">T&iacute;tulo descriptivo</p>
                    <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export {CarouselItem};
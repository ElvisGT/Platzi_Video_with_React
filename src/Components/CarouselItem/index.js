import React from 'react';
import './carouselItem.css';

function CarouselItem ({tittle,year,counterRating,duration,cover}) {
    return (
        <React.Fragment>
            <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt="people" />
                <div className="carousel-item__details">
                    <div className="carousel-item_details-img">
                        <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" alt="Play" />
                        <img src="https://img.icons8.com/fluency/48/000000/plus.png" alt="Plus" />
                    </div>
                    <p className="carousel-item__details--title">{tittle}</p>
                    <p className="carousel-item__details--subtitle">
                        {`${year} ${counterRating} ${duration} minutos`}</p>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export {CarouselItem};
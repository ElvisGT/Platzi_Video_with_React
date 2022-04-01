import React from 'react';
import './carousel.css';

function Carousel ({children}) {
    return (
        <React.Fragment>
            <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
            </section>
        </React.Fragment>
    )
}

export {Carousel};
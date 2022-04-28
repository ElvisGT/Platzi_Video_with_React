import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorites} from '../../actions/index';
import './carouselItem.css';


function CarouselItem (props) {
    const {title,url} = props;

    const handleSetFavorites = () => {
        props.setFavorites({
            title,url
        })

       
    }
    return (
        <React.Fragment>
            <div className="carousel-item">
                <img className="carousel-item__img" src={url} alt="people" />
                <div className="carousel-item__details">
                    <div className="carousel-item_details-img">
                        <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" alt="Play" />
                        <img onClick={handleSetFavorites} src="https://img.icons8.com/fluency/48/000000/plus.png" alt="Plus" />
                    </div>
                    <p className="carousel-item__details--title">{title}</p>
                    {/* <p className="carousel-item__details--subtitle">
                        {`${year} ${counterRating} ${duration} minutos`}</p> */}
                </div>
                
            </div>
        </React.Fragment>
    )
}

CarouselItem.propTypes = {
    cover:PropTypes.string,
    tittle:PropTypes.string,
    year:PropTypes.number,
    counterRating:PropTypes.string,
    duration:PropTypes.number
}

const mapDispatchToProps = {
        setFavorites
}

export default connect(null,mapDispatchToProps)(CarouselItem);
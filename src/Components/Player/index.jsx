import React,{useEffect} from 'react';
import './Player.css';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Playing} from '../../actions/index';


const Player = props => {
    const { id } = props;
    const hashPlaying = Object.keys(props.playing).length > 0;
    const navigate = useNavigate();

    // useEffect(() => {
    //     props.Playing(id);
    // },[]);

    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => navigate('/')}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        playing:state.playing,
    }
}

const mapDispatchToProps = {
    Playing
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
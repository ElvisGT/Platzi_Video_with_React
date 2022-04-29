import React from 'react';
import './categoria.css';
import {connect} from 'react-redux';

const Categorias = ({children,tittle}) => {
    return (
        <div className="categorias">
            <h3 className="categoria-tittle">
                {tittle}
            </h3>
            {children}
        </div>

    )
}


const mapStateToProps = state => {
    return {
        myList:state.myList
    }
}


export default connect(mapStateToProps,null)(Categorias);
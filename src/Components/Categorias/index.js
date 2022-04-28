import React from 'react';
import './categoria.css';
import {connect} from 'react-redux';

const Categorias = ({children,tittle,myList}) => {
    return (
        <div className="categorias">
            <h3 className="categoria-tittle">
                {tittle}
                {myList.length > 0 && <span> {myList.length}</span>}
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
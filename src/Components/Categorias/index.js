import React from 'react';
import './categoria.css';

const Categorias = ({children,tittle}) => (
    <div className="categorias">
        <h3 className="categoria-tittle">{tittle}</h3>
        {children}
    </div>
)

export {Categorias};
import React from 'react';
import './search.css';

const Search = () => (
    <section className="main">
        <h2 className="main__title">Que quieres ver hoy?</h2>
        <input className="search-input" type="text" placeholder="Buscar..."/>
    </section>
)

export {Search};
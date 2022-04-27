import React from 'react';
import './error.css';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <section class="error">
        <div class="error__container">
            <div class="error__container--mensaje">
                <h1>Error 404</h1>
                <p>Pagina no encontrada</p>
                <Link to="/" className="error-return">Regresar al Inicio</Link>
            </div>
        </div>

    </section>
);



export {NotFound};
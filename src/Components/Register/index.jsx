import React from 'react';
import './register.css';
import {Link} from 'react-router-dom';


const Register = () => (
    <React.Fragment>
        <section className="register">
            <section className="register__container">
                <h2>Registrate</h2>
                <form className="register__container--form">
                    <input type="text" className="register-input" placeholder="nombre" />
                    <input type="text" className="register-input" placeholder="correo" />
                    <input type="password" className="register-input" placeholder="password" />
                    <button className="register-buttom">Registrar</button>
                    
                    <div className="iniciar_sesion">
                        <Link to="/login">Iniciar sesi&oacute;n</Link>
                    </div>
                    
                </form>
            </section>
        </section>

    </React.Fragment>
);


export {Register};
import React,{useState} from 'react';
import {connect} from 'react-redux';
import './login.css';
import {Link, useNavigate} from 'react-router-dom';
import {LoginRequest} from '../../actions/index';


const Login = props => {
    const navigate = useNavigate();
    const [form,setValues] = useState({
        email:''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]:event.target.value
        })

    }



    const handleSubmit = event => {
        event.preventDefault();
        props.LoginRequest(form);
        navigate('/');
    }


    return (
        <React.Fragment>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesi&oacute;n</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input  type="email" 
                                className="input" 
                                placeholder="correo"
                                onChange={handleInput}
                                name="email"
                                required 
                                />
                        
                        <input  type="password" 
                                className="input" 
                                placeholder="contraseña"
                                name="password" 
                                onChange={handleInput}
                                required 
                                />
                        
                        <button className="buttom">Iniciar sesi&oacute;n</button>
                        <div className="login__container--remember-me">
                            <label >
                                <input type="checkbox"  name="" id="cbox1" value="checkbox" />Recu&eacute;rdame
                            </label>

                            <a href="/">Olvid&eacute; mi contraseña</a>
                        </div>
                        
                    </form>

                    <section className="login__container--social-media">
                        
                        <div> <img src="https://img.icons8.com/ios-glyphs/30/000000/google-logo.png" alt="Google" />Inicia sesi&oacute;n con Google</div>
                        <div> <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png" alt="Twitter" />Inicia sesi&oacute;n con Twitter</div>
                        
                    </section>
                   
                    <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
                </section>
        </section>
    </React.Fragment>
    )
}


const mapDispatchToProps = {
    LoginRequest,
}


export default connect(null,mapDispatchToProps)(Login);
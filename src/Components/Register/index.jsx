import React,{useState} from 'react';
import './register.css';
import {Link, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {UserRegister} from '../../actions/index';


const Register = (props) => {
    const [form,setValues] = useState({
        name:'',
        email:''
    })
    const navigate = useNavigate();

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = event => {
        event.preventDefault();
        props.UserRegister(form);
        navigate('/');
        
    }

    return(
        <React.Fragment>
            <section className="register">
                <section className="register__container">
                    <h2>Registrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input  type="text" 
                                className="register-input" 
                                placeholder="nombre" 
                                name="name"
                                required 
                                onChange={handleInput}
                        />
                        <input  type="email" 
                                className="register-input" 
                                placeholder="correo"
                                name="email"
                                required
                                onChange={handleInput}

                        />
                        <input  type="password" 
                                className="register-input" 
                                placeholder="contraseña" 
                                name="password"
                                required 
                                onChange={handleInput}

                        />
                        <button className="register-buttom">Registrar</button>
                        
                        <div className="iniciar_sesion">
                            <Link to="/login">Iniciar sesi&oacute;n</Link>
                        </div>
                        
                    </form>
                </section>
            </section>

        </React.Fragment>
    )
};

const mapDispatchToProps = {
    UserRegister
}

export default connect(null,mapDispatchToProps)(Register);
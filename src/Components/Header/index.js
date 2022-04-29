import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../../utils/gravatar';
import {LogOut} from '../../actions/index';

function Header (props) {
    const {user} = props;
    const hashUser = Object.keys(user).length > 0;

    const handleLogOut = () => {
        props.LogOut({});
    }

    return (
        <React.Fragment>
            <header className="header">
                <Link to="/">
                    <img className="header__img" src="https://img.icons8.com/ios-filled/30/000000/logo.png" alt="logo" />
                </Link>
                <div className= "header__menu">
                    <div className="header__menu--profile">
                        {hashUser 
                            ? 
                                <img src={gravatar(user.email)} alt={user.email}/>
                            :
                                <img src="https://img.icons8.com/ios-glyphs/50/000000/user.png" alt="user" />
                        }
                        <p>Perfil</p>
                        
                    </div>
                    <ul>
                        
                        {hashUser 
                            ?
                                <li><Link to="/login">{user.name}</Link></li>
                            :
                                null
                        }

                        {hashUser 
                            ?
                                <li><Link to="/" onClick={handleLogOut}>Cerrar sesi&oacute;n</Link></li>
                            :
                                <li><Link to="/login">Iniciar sesi&oacute;n</Link></li>
                        }
                    </ul>
                </div>
            </header>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        user:state.user
    }
}

const mapDispatchToProps = {
    LogOut
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);


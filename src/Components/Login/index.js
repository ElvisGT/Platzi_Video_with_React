import React from 'react';

function Login () {
    return (
        <React.Fragment>
            <section class="login">
                <section class="login__container">
                    <h2>Inicia sesi&oacute;n</h2>
                    <form class="login__container--form">
                        <input type="text" class="input" placeholder="correo" />
                        <input type="password" class="input" placeholder="password" />
                        <button class="buttom">Iniciar sesi&oacute;n</button>
                        <div class="login__container--remember-me">
                            <label >
                                <input type="checkbox"  name="" id="cbox1" value="checkbox" />Recu&eacute;rdame
                            </label>

                            <a href="/">Olvid&eacute; mi contraseña</a>
                        </div>
                        
                    </form>

                    <section class="login__container--social-media">
                        
                        <div> <img src="https://img.icons8.com/ios-glyphs/30/000000/google-logo.png" alt="Google" />Inicia sesi&oacute;n con Google</div>
                        <div> <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png" alt="Twitter" />Inicia sesi&oacute;n con Twitter</div>
                        
                    </section>

                    <p class="login__container--register">No tienes ninguna cuenta <a href="/">Regístrate</a></p>
                </section>
        </section>
    </React.Fragment>
    )
}

export {Login}
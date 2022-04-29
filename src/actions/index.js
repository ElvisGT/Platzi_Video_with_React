export const setFavorites = payload => ({
    type:"SET_FAVORITE",
    payload
});


export const DeleteFavorite = payload => ({
    type:"DELETE_FAVORITE",
    payload
});

export const LoginRequest = payload => ({
    type:"LOGIN_REQUEST",
    payload
});

export const LogOut = payload => ({
    type:"LOGOUT",
    payload

});

export const UserRegister = payload => ({
    type:'REGISTER',
    payload
})

export const Playing = payload => ({
    type:'PLAYING',
    payload
})
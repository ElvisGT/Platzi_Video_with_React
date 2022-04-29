const reducer = (state,action) => {
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList:[...state.myList,action.payload],
                
            }
        
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList:state.myList.filter(items => items.id !== action.payload)
            }

        case 'LOGIN_REQUEST':
            return {
                ...state,
                user:action.payload
            }
        
        case 'LOGOUT':
            return {
                ...state,
                user:action.payload
            }
        
        case 'REGISTER':
            return {
                ...state,
                user:action.payload
            }
        
        case 'PLAYING':
            return {
                ...state,
                playing:state.trends.find(items => items.id === Number(action.payload))
                || []
            }
        
        case 'SEARCH_INPUT':
            return {
                ...state,
                showTrends:state.trends.filter(item => {
                    return item.title.toLowerCase().includes(action.payload.toLowerCase())
                }) || state.trends
            }
        

        default:
            return state
    }

};

export {reducer};
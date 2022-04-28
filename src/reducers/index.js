const reducer = (state,action) => {
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList:[...state.myList.filter(items => items.title !== action.payload.title),action.payload]
            }
        default:
            return state
    }

};

export {reducer};
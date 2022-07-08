import config from "../config";


const initialState = {
    logged: false,
    userData: {},
    userDataLoading:false
}


const userData = (state = initialState, action) => {

    switch (action.type) {

        case 'userDataLoading':
            return {
                ...state,
                userDataLoading:action.payload
            }
        case 'userDataUpdate':
            return state;
        case 'matchUpdate':
            return state;
        case 'login':
            if (action.payload.logged) {
                return action.payload
            } else {
                return initialState
            }
        case 'setUserData':
            return action.payload;
        case 'isLogged':               
                if (action.payload.logged) {
                    return action.payload
                } else {
                    return initialState
                }
                case 'logOut':
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: 'include'
                    };
                    fetch(config.serverUrl + "logout", requestOptions)

                    return initialState

                default:
                    return state;
    }
}

export default userData;
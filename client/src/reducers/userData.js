import config from "../config";


const initialState = {
    logged: false,
    userData: {}
}


const userData = (state = initialState, action) => {

    switch (action.type) {

        case 'matchUpdate':
            console.log('matchupader reducer');

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
                console.log('islogged call', action.payload);
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
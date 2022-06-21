import config from "../config";


const initialState = {
    logged: false,
    userData: {}
}


const userData = (state = initialState, action) => {
    switch (action.type) {

        case 'setUserData':
            return action.payload;

        case 'isLogged':



            return action.payload
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
import config from '../config'


const isLoggedMiddleware = store => next => action => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }

    switch (action.type) {

        case 'isLogged':
            fetch(config.serverUrl + 'isLogged', requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('islogged fetch is fail');
                    }
                })
                .then(data => {
                    if (data.logged) {
                        action.payload = data
                        return next(action)
                    } else {

                        action.payload = {
                            logged: false,
                            userData: {}
                        }
                        return next(action)
                    }
                })
            break;

        case 'fetchUsersCatalog':

            fetch(config.serverUrl + 'users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(data => {
                    action.payload = data
                    let result = next(action);
                    return result;
                })
            break;

        case 'fetchMessages':

            fetch(config.serverUrl + 'msgs', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(data => {
                    action.payload = data
                    let result = next(action);


                    return result;
                })
            break;

        case 'fetchNewMessageCount':
            fetch(config.serverUrl + 'newmsgs', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(data => {
                    action.payload = data
                    let result = next(action);

                    return result;
                })

            break;

        case 'sendMessage':

            fetch(config.serverUrl + 'msg', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(action.payload)
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(data => {

                    action.payload = data
                    return next(action)
                })


            break;
        default:
            return next(action)

    }





}


export default isLoggedMiddleware
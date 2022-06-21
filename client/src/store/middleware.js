import config from '../config'


const isLoggedMiddleware = store => next => action => {

    console.log(action);

    switch (action.type) {
        case 'isLogged':

            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }

            fetch(config.serverUrl + 'isLogged', requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('islogged fetch is fail');

                    }
                })
                .then(data => {
                    console.log(data, 'data from middleware check');
                    if (data.logged) {
                        action.payload = data
                        return next(action)
                    } else {
                        // action.type = "showLoginForm";
                        return next(action)
                    }
                })


            break;

        default:
            return next(action)

    }





}


export default isLoggedMiddleware
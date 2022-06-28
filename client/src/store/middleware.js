import config from '../config'
import axios from 'axios'
import {
    useSelector,
    useDispatch
} from 'react-redux';

const isLoggedMiddleware = store => next => action => {




    switch (action.type) {

        case 'login':

            // useDispatch().dispatch({
            //     type: 'isLoading',
            //     payload: true
            // })

            (async () => {
                try {

                    const response = await axios.post(config.serverUrl + 'login', action.payload, {
                        withCredentials: true
                    })

                    if (response.status == 200) {
                        console.log(response.data, 'response from midleeware login action');
                        action.payload = response.data
                        return next(action)
                    }

                } catch (error) {
                    console.log(error);
                }
            })().catch(err => {
                console.error(err);
            });

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








        default:
            return next(action)

    }





}


export default isLoggedMiddleware
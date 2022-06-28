import axios
from "axios";
import {
    useDispatch
} from "react-redux";
import config from "../config";

export const sendMessage = (msg) => async (dispatch) => {

    await axios.post(config.serverUrl + 'msg', msg, {
            withCredentials: true
        })
        .then(resolve => {
            if (resolve.status == 200) {

                dispatch({
                    type: 'sendMessage',
                    payload: resolve.data
                })
            }
        })

}


export const fetchMessages = (prevMessages) => async (dispatch) => {

    dispatch({
        type: 'fetchMessages',
        payload: {
            loading: true,
            messages: prevMessages
        }
    })

    const resolve = await axios.get(config.serverUrl + 'msgs', {
        withCredentials: true
    })

    if (resolve.status == 200) {
        setTimeout(() => {

            dispatch({
                type: 'fetchMessages',
                payload: {
                    loading: false,
                    messages: resolve.data
                }
            })
        }, 2000);
    }
}

export const fetchNewMessageCount = () => async (dispatch) => {

    try {
        const resolve = await axios.get(config.serverUrl + 'newmsgs', {
            withCredentials: true
        })
        if (resolve.status == 200) {
            dispatch({
                type: 'fetchNewMessageCount',
                payload: resolve.data
            })
        } else {
            dispatch({
                type: 'fetchNewMessageCount',
                payload: 0
            })
        }
    } catch (error) {
        console.log(error);
    }

}


export const msgDisplayed = (to) => async (dispatch) => {
    console.log('msgdisplayed dfromn actions');

    try {
        axios.post(config.serverUrl + 'msgdisplayed', {
            to
        }, {
            withCredentials: true
        })
    } catch (error) {
        console.log(error);
    }
}


// case 'msgDisplayed':

// fetch(config.serverUrl + 'msgdisplayed', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify({
//         to: action.payload
//     })
// })

// next(action)


// case 'fetchNewMessageCount':
//     fetch(config.serverUrl + 'newmsgs', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include'
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//         })
//         .then(data => {
//             action.payload = data
//             let result = next(action);

//             return result;
//         })

//     break;
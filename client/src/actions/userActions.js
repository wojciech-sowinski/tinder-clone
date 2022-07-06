import axios
from "axios";
import {
    useDispatch
} from "react-redux";
import config from "../config";



export const isLogged = () => async (dispatch) => {
    
    console.log('islogged check');
    
    dispatch({
        type: 'userDataLoading',
        payload: true
    })

    try {

        const response = await axios.get(config.serverUrl + 'isLogged', {
            withCredentials: true
        })

        if (response.status == 200) {
            console.log('islogged respnse', response.data);

            dispatch({
                type: 'isLogged',
                payload: response.data
            })
           
            dispatch({
                type: 'userDataLoading',
                payload: false
            })
        }

    } catch (error) {
        console.log(error);
    }


}



export const matchUpdate = (userId, matchId) => async (dispatch) => {
    console.log('matchupd call');

    try {

        await axios.post(config.serverUrl + 'matchupd', {
                userId,
                matchId
            }, {
                withCredentials: true
            })
            .then(resolve => {
                if (resolve.status == 200) {
                    console.log(resolve);

                    dispatch({
                        type: 'matchUpdate'
                    })
                    dispatch(isLogged())

                }
            })

    } catch (error) {
        console.log(error);
    }

}
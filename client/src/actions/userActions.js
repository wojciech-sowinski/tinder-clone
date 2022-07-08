import axios
from "axios";
import {
    useDispatch
} from "react-redux";
import config from "../config";


export const deleteUserImg = (fileName)=> async (dispatch)=>{
console.log('click del image',fileName);

    try {
        
        await axios.post(config.serverUrl + 'deluserimg',{fileName},{
            withCredentials: true
        })
        .then(resolve => {
            if(resolve.status===200){
                
                dispatch(isLogged())
            }
        })

    } catch (error) {
        console.log(error);
        
    }

}

export const userDataUpdate = (dataToUpd) => async (dispatch) =>{
    dispatch({
        type: 'userDataLoading',
        payload: true
    })

    try {
        await axios.post(config.serverUrl + 'user', 
            dataToUpd
        , {
            withCredentials: true
        })
        .then(resolve => {
            if (resolve.status == 200) {              
                if (resolve.data.result === 'user data updated') {                    
                    dispatch(isLogged()) 
                    dispatch({
                        type: 'userDataLoading',
                        payload: false
                    })                              
                    }
            }
        })
        
        
    } catch (error) {
        console.log(error);        
    }
}

export const isLogged = () => async (dispatch) => {
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
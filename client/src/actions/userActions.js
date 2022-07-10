import axios
from "axios";

import config from "../config";

export const register=(registerData) => async  (dispatch)=>{

    
    

    try {
        const response = await axios.post(config.serverUrl + 'register', registerData, {
            withCredentials: true
        })
        
        if (response.status == 200) {
            
                
                
            if (response.data.result === "account created") {

                    dispatch({type:'register',payload:'Congratulations. Your account has been created. Before you can use it, you must log in.'})
                    setTimeout(() => {
                        dispatch({ type: 'register', payload: '' })
        
                    }, 2000);
                    setTimeout(() => {
                        dispatch({type:'showLoginForm'})
                    }, 3000);               

            }else if(response.data.result === "user exists"){
                dispatch({type:'register',payload:'A user with this email address already exists in the system.'})
                setTimeout(() => {
                    dispatch({ type: 'register', payload: '' })
    
                }, 2000);
            }
        }else{
            console.log('register failed');
            
        }



    } catch (error) {
        console.log(error);
        
    }


}

export const login =(loginData)=> async (dispatch) =>{    
    
    try {
        const response = await axios.post(config.serverUrl + 'login', loginData, {
            withCredentials: true
        })
        
        if (response.status == 200) {
            if(response.data.logged){
                dispatch(isLogged())
            }else{                   
                dispatch({
                    type: 'login',
                    payload: response.data
                })
                setTimeout(() => {
                    dispatch({
                        type: 'login',
                        payload: {...response.data,resultInfo:''}
                    })  
                }, 2000);
            }
        }



    } catch (error) {
        console.log(error);
        
    }

}


export const deleteUserImg = (filePath)=> async (dispatch)=>{
    dispatch({
        type: 'userDataLoading',
        payload: true
    })
    try {
        
        await axios.post(config.serverUrl + 'deluserimg',{filePath},{
            withCredentials: true
        })
        .then(resolve => {
            if(resolve.status===200){

                dispatch(isLogged())
                dispatch({
                    type: 'userDataLoading',
                    payload: false
                })
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
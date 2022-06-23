import LoginButton from "./LoginButton"

const LogInInfo=()=>{
    return(
        
        <>
        <div className="login-info">
            <div><h2>You must be logged in.</h2></div>
            <div>
            <LoginButton/>

            </div>
        </div>
        
        </>

    )
}

export default LogInInfo
import '../styles/onboardInfo.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blankimg from '../img/blank-profile-picture.png'

const OnboardInfo = () => {


    const counterTime = 10
    const [counter, setCounter] = useState(counterTime)
    const navigate = useNavigate();

    useEffect(() => {

        const counterTimeInterval = setInterval(() => {
            setCounter(prev => prev -= 1)
        }, 1000);
        const counterRedirect = setTimeout(() => {
            navigate('/onboard')
        }, counterTime * 1000);


        return () => {
            clearInterval(counterTimeInterval)
            clearTimeout(counterRedirect)
        }

    }, [])

    return (
        <div className="onboard-info">
            <img src={blankimg} alt="blank user img" />
            <h2>To use the dashboard, you must complete your profile.</h2>

            <button onClick={() => { navigate('/onboard') }} className='redirect-button'>Redirect in {counter}s</button>
        </div>
    );
}

export default OnboardInfo;
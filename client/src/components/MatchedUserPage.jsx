import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCakeCandles, faMars, faVenus, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import '../styles/matchedUserPage.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { divContainerVariants, pageContainerVariants } from '../animations/motion'

const MatchedUserPage = ({ activeMatch }) => {

    const users = useSelector(state => state.users)
    const [{ aboutMe, birthDate, firstName, gender, interest, imgUrl }] = users.filter(user => user._id === activeMatch)


    const characterAge = (birthDate) => {

        return (new Date().getFullYear()) - (new Date(birthDate).getFullYear())

    }

    const genderSign = (gender) => {

        switch (gender) {
            case 'Female':
                return <FontAwesomeIcon icon={faVenus} />
            case 'Male':
                return <FontAwesomeIcon icon={faMars} />
            case 'Both':
                return <FontAwesomeIcon icon={faVenusMars} />

            default:
                break;
        }

    }


    return (
        <motion.div className="matched-user-page"
            key={"matched-user-page-key"}
            variants={divContainerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>


            <div className='match-user-imgs'>
                <img src={imgUrl} alt="matched user img" />
            </div>
            <div className='match-user-info'>

                <h2 > {firstName} </h2>
                <div className='match-user-info-bar'>
                    <span>Age: <span className='match-user-age-span'>{` ${characterAge(birthDate)}`}</span></span>
                    <span>
                        Gender: {genderSign(gender)}
                    </span>
                    <span>
                        Interest: {genderSign(interest)}
                    </span>
                </div>

                <div className='about-me-container'>
                    <p>
                        About me:
                    </p>
                    <p>{aboutMe}</p>
                </div>

            </div>



        </motion.div>
    );
}

export default MatchedUserPage;
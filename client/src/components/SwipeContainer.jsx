import TinderCard from 'react-tinder-card'
import { useEffect, useState } from 'react'
import config from '../config'
import { useSelector, useDispatch } from 'react-redux'
import { matchUpdate } from '../actions/userActions'
import MatchedUserPage from "../components/MatchedUserPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCakeCandles, faMars, faVenus, faVenusMars, faAnglesLeft, faAnglesRight, faChev } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { divContainerVariants, pageContainerVariants } from '../animations/motion'


const SwipeContainer = ({ activeMatch, setActiveMatch }) => {

  const users = useSelector(state => state.users)
  const [characters, setCharacters] = useState(users)
  const dispatch = useDispatch()
  const { logged, userData } = useSelector(state => state.userData)




  const [lastDirection, setLastDirection] = useState()

  const addMatch = (id) => {
    const userMatches = [...userData.matches]

    if (userMatches.findIndex((match) => match === id) > -1) {
      console.log('this match is exists');
    } else {
      dispatch(matchUpdate(userData._id, id))
    }


  }

  const sortCharacters = (data) => {
    const sortedUsers = data.filter(character => {
      if (character.gender === userData.interest && character.interest === userData.gender && userData._id !== character._id) {
        return character
      }
    })
    return sortedUsers
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

  const swiped = (direction, nameToDelete) => {

    setLastDirection(direction)
    if (direction === 'right') {
      addMatch(nameToDelete)
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const characterAge = (birthDate) => {

    return (new Date().getFullYear()) - (new Date(birthDate).getFullYear())

  }

  useEffect(() => {
    setCharacters(users)
  }, [users, userData])

  return (
    <motion.div className="swipe-container"
      variants={divContainerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      key={'dashboardpagekey'}>
      <div className='swipe-info-left'>
        <div><span>Swipe left to forget</span></div>
        <div>{<FontAwesomeIcon icon={faAnglesLeft} />}</div>

      </div>
      <div className='cardContainer'
      >
        {sortCharacters(characters).map((character) =>
          <TinderCard
            key={character._id}
            className='swipe'
            onSwipe={(dir) => swiped(dir, character._id)}
            onCardLeftScreen={() => outOfFrame(character.firstName)}
            preventSwipe={['up', 'down']}>
            <div
              style={{ backgroundImage: 'url(' + character.imgUrl[0] + ')' }} className='card'>
            </div>
            <div className='tinder-card-character-info'>
              <div className='card-header'>
                <span className='character-first-name'>{character.firstName} {genderSign(character.gender)}</span> <span className='character-age'><FontAwesomeIcon icon={faCakeCandles} />{` ${characterAge(character.birthDate)}`}</span>
              </div>
              <div className='about-me'>
                <h4>About Me</h4>
                <p className='info-text'>{character.aboutMe}</p>
              </div>
            </div>
          </TinderCard>
        )}
      </div>


      <div className='swipe-info-right'>
        <div><div>{<FontAwesomeIcon icon={faAnglesRight} />}</div></div>
        <div><span>Swipe right to match</span></div>
      </div>
    </motion.div>
  );
}

export default SwipeContainer;
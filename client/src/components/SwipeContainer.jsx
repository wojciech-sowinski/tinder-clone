import TinderCard from 'react-tinder-card'
import { useEffect, useState } from 'react'
import config from '../config'
import { useSelector, useDispatch } from 'react-redux'
import { matchUpdate } from '../actions/userActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCakeCandles } from '@fortawesome/free-solid-svg-icons'


const SwipeContainer = () => {

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
    <div className="swipe-container">
      <div className='cardContainer'>
        {sortCharacters(characters).map((character) =>
          <TinderCard
            key={character._id}
            className='swipe'
            onSwipe={(dir) => swiped(dir, character._id)}
            onCardLeftScreen={() => outOfFrame(character.firstName)}
            preventSwipe={['up', 'down']}>
            <div
              style={{ backgroundImage: 'url(' + character.imgUrl + ')' }} className='card'>
            </div>
            <div className='tinder-card-character-info'>
              <div className='card-header'>
                <span className='character-first-name'>{character.firstName}</span> <span className='character-age'><FontAwesomeIcon icon={faCakeCandles} />{` ${characterAge(character.birthDate)}`}</span>
              </div>
              <div className='about-me'>
                <h4>About Me</h4>
                <p className='info-text'>{character.aboutMe}</p>
              </div>
            </div>
          </TinderCard>
        )}
      </div>

      <div className='swipe-info'>
        <span>{`<<`}Swipe left to forget</span>
        <span>Swipe right to match{`>>`}</span>
      </div>
    </div>
  );
}

export default SwipeContainer;
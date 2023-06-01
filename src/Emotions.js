import React from 'react'
import useToggler from './useToggler'
import './Emotions.css'


function Emotions() {

    const [isHappy, toggleHappy] = useToggler(false)

    return (<div className='Emotions-section'>
        <div>TODAY IS A {isHappy ? "HAPPY" : "SAD"} DAY. {isHappy ? "IM SO GRATEFUL." : "I WISH THE DAY GETS BETTER."}  </div>
        <button onClick={toggleHappy}>{isHappy ? "Too happy?" : "Make me happy"}</button>
    </div>)
}

export default Emotions

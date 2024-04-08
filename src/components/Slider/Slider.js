import './Slider.css'
import React from 'react'
import { userContext } from '../../App'
import { useContext } from 'react'

function Slider() {
    const {
        slider
    } = useContext(userContext)

    return (
        <div className='DivSliderContainer'>
            <span>weak</span>
            <div className="SliderDiv">
                <div className='SliderItem' style={{width: `${slider}%`}}></div>
            </div>
            <span>strength</span>
        </div>
    )
}

export { Slider }
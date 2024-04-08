import React from "react"
import { useContext } from "react"
import { userContext } from "../../../../App"

function PrepareCoffeGr() {
    const {
        coffeGr,
        setCoffeGr,
        decrement,
        increment,
        newName,
        calcCoffe
    } = useContext(userContext)
    
    return (
    <div className="PrepareCoffeDivButtons">
        <div className="PrepareCoffeP">
            <p>coffe gr</p>
        </div>
        <div className="PrepareCoffeButtons">
            <span onClick={() => {
                decrement(coffeGr, setCoffeGr, 5)
                calcCoffe(newName)
            }} className="Rest">-</span>
            <p className='Count'>{coffeGr}</p>
            <span onClick={() => {
                increment(coffeGr, setCoffeGr, 5)
                calcCoffe(newName)
            }} className="Plus">+</span>
        </div>
    </div>
    )
}

export { PrepareCoffeGr }
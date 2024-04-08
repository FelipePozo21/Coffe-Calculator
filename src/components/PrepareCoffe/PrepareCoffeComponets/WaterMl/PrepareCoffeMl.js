import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeMl() {
    const {
        waterMl,
        setWaterMl,
        increment,
        decrement,
        newName,
        calcCoffe
    } = useContext(userContext)
    
    return (
        <div className="PrepareCoffeDivButtons">
            <div className="PrepareCoffeP">
                <p>water ml</p>
            </div>
            <div className="PrepareCoffeButtons">
                <span onClick={() => {    
                    decrement(waterMl,setWaterMl, 50)
                    calcCoffe(newName)
                }} className="Rest">-</span>
                <p className='Count'>{waterMl}</p>
                <span onClick={() => {
                    increment(waterMl,setWaterMl, 50)
                    calcCoffe(newName)
                }} className="Plus">+</span>
            </div>
        </div>
    )
}

export { PrepareCoffeMl }
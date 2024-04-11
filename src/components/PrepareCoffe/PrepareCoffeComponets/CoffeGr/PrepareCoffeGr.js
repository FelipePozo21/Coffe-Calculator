import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeGr() {
    const {
        coffeeGr,
        setCoffeeGr,
        ratioWater,
        setWater,
    } = useContext(userContext)
    
    const coffeRatio = (e) => {
        setCoffeeGr(e.target.value)
}

    return (
        <div className="PrepareCoffeGrContainer">
            <div className="PrepareCoffeGrName">
                <p>gramos</p>
            </div>
            <div className="PrepareCoffeGr">
                <input className="PrepareCoffeGrP" maxLength='3' type="text" value={coffeeGr} onChange={coffeRatio}></input>
            </div>
        </div>
    )
}

export { PrepareCoffeGr }
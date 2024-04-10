import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeGr() {
    const {
        waterMl,
        setWaterMl,
        increment,
        decrement,
        newName,
        calcCoffe
    } = useContext(userContext)
    
    return (
        <div className="PrepareCoffeGrContainer">
            <div className="PrepareCoffeGrName">
                <p>gramos</p>
            </div>
            <div className="PrepareCoffeGr">
                <p className="PrepareCoffeGrP">12</p>
            </div>
        </div>
    )
}

export { PrepareCoffeGr }
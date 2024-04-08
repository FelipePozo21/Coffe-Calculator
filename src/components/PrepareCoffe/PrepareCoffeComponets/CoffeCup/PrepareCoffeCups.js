import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeCups() {
    const {
        cups,
        setCups,
        decrement,
        increment,
        newName,
        calcCoffe
    } = useContext(userContext)

    return (
        <div className="Cups">
            <div className="Cups-p">
                <p>cups</p>
            </div>
            <div className="PrepareCoffeButtonsCup">
                <span onClick={() => {
                    decrement(cups, setCups, 1)
                    calcCoffe(newName)
                }} className="Rest">-</span>
                <p className="Count CountCup">{cups}</p>
                <span onClick={() => {
                    increment(cups, setCups, 1)
                    calcCoffe(newName)
                }} className="Plus">+</span>
            </div>
        </div>
    )
}

export { PrepareCoffeCups }
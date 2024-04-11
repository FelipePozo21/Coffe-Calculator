import React from "react"
import { useContext } from "react"
import { userContext } from "../../../../App"

function PrepareCoffeRatio() {
    const {
        ratioCoffe,
        setRatioCoffe,
        ratioWater,
        setRatioWater
    } = useContext(userContext)

    const coffeRatio = (e) => {
        setRatioCoffe(e.target.value)
    }

    const waterRatio = (e) => {
        setRatioWater (e.target.value)
    }

    return (
    <div className="PrepareCoffeRatioContainer">
        <div className="PrepareCoffeRatioName">
            <p>ratio</p>
        </div>
        <div className="PrepareCoffeRatio">
            <input maxLength='2' type="text" value={ratioCoffe} onChange={coffeRatio}></input>
            <span className="SpanRatio"></span>
            <input maxLength='2' type="text" value={ratioWater} onChange={waterRatio}></input>
        </div>
    </div>
    )
}

export { PrepareCoffeRatio }
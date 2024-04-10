import React from "react"
import { useContext } from "react"
import { userContext } from "../../../../App"

function PrepareCoffeRatio() {
    const {
        ratioCoffe,
        setRatioCoffe
    } = useContext(userContext)

    const increment = () => {
        
    }

    return (
    <div className="PrepareCoffeRatioContainer">
        <div className="PrepareCoffeRatioName">
            <p>ratio</p>
        </div>
        <div className="PrepareCoffeRatio">
            <input type="submit" value={ratioCoffe} onChange={increment}>2</input>
            <span className="SpanRatio"></span>
            <p className="RattioMl">12</p>
        </div>
    </div>
    )
}

export { PrepareCoffeRatio }
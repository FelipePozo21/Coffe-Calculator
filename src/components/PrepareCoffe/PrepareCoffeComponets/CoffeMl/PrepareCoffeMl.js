import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeMl() {
const {
    water
} = useContext(userContext)

    return (
        <div className="PrepareCoffeMlContainer">
            <div className="PrepareCoffeMlName">
                <p>ml</p>
            </div>
            <div className="PrepareCoffeMl">
                <p className="PrepareCoffeMlP">{water}</p>
            </div>
        </div>
    )
}

export { PrepareCoffeMl }
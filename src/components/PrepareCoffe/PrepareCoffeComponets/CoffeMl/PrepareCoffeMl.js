import React from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";

function PrepareCoffeMl() {


    return (
        <div className="PrepareCoffeMlContainer">
            <div className="PrepareCoffeMlName">
                <p>ml</p>
            </div>
            <div className="PrepareCoffeMl">
                <p className="PrepareCoffeMlP">12</p>
            </div>
        </div>
    )
}

export { PrepareCoffeMl }
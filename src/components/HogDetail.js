import React from "react"

function HogDetail({hog}){
    const temp = hog.greased ? "true" : "false"

    return(
        <div className="extra content">
            <div className="meta">
                specialty: {hog.specialty}
            </div>
            <div className="description">
                highest medal achieved: {hog["highest medal achieved"]}
            </div>
            <span className="left floated">
                greased: {temp}
            </span>
            <span className="right floated">
            weight: {hog.weight}
            </span>
        </div>
        ) 
    }
export default HogDetail
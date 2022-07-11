import React from "react"

function Sort({onSortChange}){
    return (
        <div className="sort" style={{marginBottom:"20px"}}>
            <label>Sort By </label>
            <select onChange={(e)=>onSortChange(e.target.value)}>
                <option value="original">original</option>
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
        </div>
    )
}

export default Sort
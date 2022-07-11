import React, {useState} from "react"
import HogDetail from "./HogDetail"

function HogList({hogArray, filterGreased, selectedSort}){
    let sortedArray=[];
    const [showDetail, setShowDetail] = useState(true)

    function handleDetail(name){
        document.getElementById({name}.name).querySelector(".detail").hidden = !showDetail
        setShowDetail(!showDetail)
    }

    if(selectedSort === "name"){
        sortedArray = [...hogArray].sort((a,b)=>{
                                let nameA = a.name.toLowerCase() 
                                let nameB = b.name.toLowerCase()
                                if(nameA<nameB){
                                    return -1
                                }else if(nameA<nameB){
                                    return 1
                                }else{
                                    return 0
                                }})
    }else if(selectedSort === "weight"){
        sortedArray = [...hogArray].sort((a,b)=>a.weight - b.weight)
    }else{
        sortedArray = hogArray
    }

    const filteredHogs = sortedArray.filter(hog=>{
        return filterGreased ? hog.greased === filterGreased : true
    })

    const hogCard = filteredHogs.map(hog=>{
        return (
            <div className="card" key={hog.name} id={hog.name} onClick={()=>handleDetail(hog.name)}>
                <div className="image">
                    <img alt={hog.name} src={hog.image}/>
                </div>
                <div className="content">
                    <div className="header">{hog.name}</div>
                </div>
                <div className="detail" hidden={true}>
                    <HogDetail hog={hog}/>
                </div>
            </div>
        )
    })
    return(
        <div className="ui link cards">
            {hogCard}
        </div>
    )
}

export default HogList
import React, {useState} from 'react';

function Item({info}) {
    let [btn,setBtn]=useState([
        {name: "healthBtn" , value:false}, {name: "recipeBtn" , value:false}, {name: "digestBtn" , value:false}])

    let healthLabels=info.healthLabels.map((n,index)=>{
        return <div className="healthLabels" key={index}>{n}</div>
    })

    let ingredient=info.ingredientLines.map((n,index)=>{
        return <div className="ingredient" key={index}>{n}</div>
    })

    let digest=info.digest.map((n,index)=>{
        return <div className="digest" key={index}> {n.label} : {Math.round(n.total)}</div>
    })

    function handleCLickItems(type){

        setBtn(btn.map((b)=>{

            if(b.name===type&&b.value===false){
                return {name: b.name , value:true}
            }
            return {name: b.name , value:false}
        }))
    }
    return <>
        <div className="row-1 item" onClick={()=>handleCLickItems("healthBtn")}>Health lable</div>
        <div className="grid-container">{btn[0].value&&healthLabels.slice(0,9)}</div>
        <div className="row-2 item" onClick={()=>handleCLickItems("recipeBtn")}>Ingredients</div>
        <div>{btn[1].value&& ingredient}</div>
        <div className="row-3 item" onClick={()=>handleCLickItems("digestBtn")}>Nutritional Value </div>
        <div className="grid-container">{btn[2].value&&digest.slice(0,9)}</div>
    </>
}

export default Item;
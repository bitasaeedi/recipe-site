import React, {useEffect, useState} from 'react';
import Input from "./input";
import Posts from "./posts";

function Recpies(props) {
    let [foodName,setFoodName]=useState("");
    let [foodExist,setFoodExist]=useState(true);
    let [isLoading,setIsLoading]=useState(true);
    let [recipes,setRecipes]=useState([]);
    let loading= <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>;
    function handleClick(text){
        setFoodName(text);
    }

    useEffect(()=>{
        if(foodName){
            setFoodExist(false)
            setIsLoading(false)
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${foodName}&app_id=1286e73b&app_key=5c7378e6809c519aeda78268eec4d492`)
                .then(res=>res.json())
                .then(f=>{
                    setIsLoading(true)
                    if (f.count===0){
                       setFoodExist(false)
                        setRecipes([])
                    }
                    else { setRecipes(f);
                        setFoodExist(true);
                    setRecipes(f)
                        setFoodExist(true)}
                })
        }
    },[foodName])

    function handleNext(){
        setIsLoading(false)
        setFoodExist(false)
        fetch(recipes._links.next.href)
            .then(res=> res.json())
            .then(f=>{
                setIsLoading(true)
                setFoodExist(true);
                setFoodExist(true)
                setRecipes(f)
            })
    }
    return <>
        <Input handleClick={handleClick}/>
        {!isLoading?loading:(foodExist?(recipes.length!==0)&&<Posts recipes={recipes}/>:<div className="exist-error"> cant find this food!</div>)}
        {foodExist&&(recipes.length!==0)&&<div className="next-btn" onClick={handleNext}>></div>}
    </>
}

export default Recpies;
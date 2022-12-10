import React from 'react';
import Item from "./item";


function Posts({recipes}) {

    let posts=recipes.hits.map((food,index)=>{
        let cal=Math.round(food.recipe.calories);
        return <div className="posts-container" key={index}>
                <div className="top-post">
                    <img src={food.recipe.images.SMALL.url} alt="food"/>
                    <div className="info">
                        <h4>{food.recipe.label}</h4>
                        <div>{food.recipe.dishType}</div>
                        <div>{cal} kcal</div>
                    </div>
                </div>
                <div className="bottom-post">
                    <Item info={food.recipe}/>
                </div>
            </div>
    })

    return <>
        {posts}
    </>
}

export default Posts;
import React from 'react';
import Recpies from "./component/recpies";
import "./App.css"
function App() {
    let url="https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=1286e73b&app_key=5c7378e6809c519aeda78268eec4d492";
    return <>
        <div className="container">
            <Recpies/>
        </div>
    </>
}

export default App;
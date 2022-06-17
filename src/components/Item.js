import React from "react"

function Item({id,name,image}) {

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt ={name}></img>
        </div>
    )   
}


 
export default Item
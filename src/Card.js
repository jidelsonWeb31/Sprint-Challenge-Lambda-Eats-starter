import React from "react";

function Card({details}){
    if (!details) {
        return <h3>Searching for your order information...</h3>
    }


    return(
        <div>

            <h2>{details.name}</h2>
            <p>{details.specialInstructions}</p>
            <p>{details.size}</p>
        </div>
    )
}

export default Card;
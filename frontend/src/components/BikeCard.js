import React from 'react'


const BikeCard = (props) => {
    console.log(props)

    return (
        <div className="container bike-card">
            <img src="https://p.vitalmtb.com/photos/products/19177/photos/24726/s1600_2017_Nukeproof_Mega_275_Comp.jpg?1499930986" alt="mountain bike" />
            <p>Model: {props.model} </p>
            <p>Wheel Size: {props.wheelSize}</p>
            <p>Type: {props.subType}</p>
        </div>
    )

}

export default BikeCard
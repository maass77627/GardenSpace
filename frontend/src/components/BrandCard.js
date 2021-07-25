import React from 'react'


const BrandCard = (props) => {

    return (
        <div className="container bike-card">
            <p>Brand: {props.name} </p>
        </div>
    )

}

export default BrandCard
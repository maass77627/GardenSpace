import React,
{
    useState,
    useEffect
} from 'react'


const BikeCard = (props) => {

    useEffect(() => {
        fetch(`http://localhost:9292/brand/${props.brandId}`)
        .then(res => res.json())
        .then(data => {
            setRequestedBrands(data)
        })
    }, [props.brandId])

    const [requestedBrands, setRequestedBrands] = useState([])

    return (
        <div className="container bike-card">
            <h3>{requestedBrands.name} {props.model}</h3>
            <img src={props.imgUrl} alt={`${requestedBrands.name} ${props.model} ${props.mainType}`} />
            <p>Wheel Size: {props.wheelSize}</p>
            <p>Type: {props.subType}</p>
        </div>
    )

}

export default BikeCard
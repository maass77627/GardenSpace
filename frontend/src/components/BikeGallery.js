import React, {
    useState,
    useEffect
} from 'react'
import BikeCard from './BikeCard'


const BikeGallery = () => {
    
    
    useEffect(() => {
        fetch("http://localhost:9292/bikes/")
        .then(response => response.json())
        .then(data => {
            setRequestedBikes(data)
        })
    }, [])

    
    const [requestedBikes, setRequestedBikes] = useState([])
    
    const renderBikeCards = () => {
        return requestedBikes.map( (bike) => {
            return <BikeCard model={bike.model} wheelSize={bike.wheel_size} subType={bike.sub_type} />
        })
    }

    return (
        <div className="container">
            {renderBikeCards()}
        </div>

    )

}

export default BikeGallery
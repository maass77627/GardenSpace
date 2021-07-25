import React, {
    useState,
    useEffect
 } 
 from 'react'
import BrandCard from './BrandCard'


const BrandGallery = () => {

    useEffect(() => {
        fetch("http://localhost:9292/brands/")
        .then(response => response.json())
        .then(data => {
            setRequestedBrands(data)
        })
    }, [])

    const [requestedBrands, setRequestedBrands] = useState([])

    const renderBrandCards = () =>  {
        return requestedBrands.map( (brand) => {
            return <BrandCard name={brand.name} />
        })
    }

    return(
        <div className="container">
            {renderBrandCards()}
        </div>
    )

}

export default BrandGallery
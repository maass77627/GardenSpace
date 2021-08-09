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
    }, [])

    const [requestedBrands, setRequestedBrands] = useState([])
    const [removeBikeModal, setRemoveBikeModal] = useState(false)

    const deleteBike = () => {
        
        fetch(`http://localhost:9292/delete-bike/${props.bikeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application.json',
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        renderConfirmationModal()
    }

    const renderConfirmationModal = () => {
        setRemoveBikeModal(!removeBikeModal)
    }

    return (
        <>
            {
                removeBikeModal === true &&
                <div className="form-modal">
                    <div className="form-content">
                        <p>Are you sure you want to remove this bike?</p>
                        <button onClick={deleteBike}>Yes</button>
                        <button onClick={renderConfirmationModal}>Cancel</button>
                    </div>
                </div>
            }
            <div className="container bike-card">
                <p className="card-delete" onClick={renderConfirmationModal}>X</p>
                <h3>{requestedBrands.name} {props.model}</h3>
                <img src={props.imgUrl} alt={`${requestedBrands.name} ${props.model} ${props.mainType}`} />
                <p>Wheel Size: {props.wheelSize}</p>
                <p>Type: {props.subType}</p>
            </div>
        </>
    )

}

export default BikeCard
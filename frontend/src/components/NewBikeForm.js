import React, 
{
    useState
} from 'react'


const NewBikeForm = ( ) => {

    const [brand, setBrand] = useState()
    const [model, setModel] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [wheelSize, setWheelSize] = useState()
    const [bikeType, setBikeType] = useState()
    const [subType, setSubType] = useState()
    const [isEbike, setIsEbike] = useState()

    const [ displayModal, setDisplayModal ] = useState()

    const hideModal = () => {
        setDisplayModal("hidden")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBikeData = {
            "brand": brand,
            "model": model,
            "image url": imageUrl,
            "wheel size": wheelSize,
            "type": bikeType,
            "sub type": subType,
            "is ebike": isEbike
        }
        console.log(newBikeData)
        fetch("http://localhost:9292/new_bike",{
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newBikeData)
        })
        .then( res => {
            console.log("Request complete. Response:", res)
            hideModal()
        })
        
    }

    return(
        <div className={`form-modal ${displayModal}`}>
            <form className={"form-content"} onSubmit={handleSubmit}>
                <p className="exit" onClick={hideModal}>X</p>
                <h3>Add a bike to the database:</h3>
                <label className="form-text-box">
                    Brand:
                    <input type="text" placeholder="ex. Nukeproof" onChange={ e => setBrand(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Model:
                    <input type="text" placeholder="ex. Mega 275 comp" onChange={ e => setModel(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Image Url:
                    <input type="text" placeholder="ex .example.com" onChange={ e => setImageUrl(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Wheel Size:
                    <input type="text" placeholder="ex. 27.5 or 29er" onChange={ e => setWheelSize(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Type:
                    <input type="text" placeholder="ex. Mountain Bike" onChange={ e => setBikeType(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Sub-type:
                    <input type="text" placeholder="ex. Enduro" onChange={ e => setSubType(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    Ebike?
                    <input type="text" placeholder="ex. true or false" onChange={ e => setIsEbike(e.target.value)}></input>
                </label>
                <label className="form-text-box">
                    <input type="submit" value="Add Bike"></input>
                </label>
            </form>
        </div>
    )

}

export default NewBikeForm
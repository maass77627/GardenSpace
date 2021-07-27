import React,
{
    useState
} from 'react'
import NewBikeForm from './NewBikeForm'


const NewBike = () => {
    let [ isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)

    }

    return ( 
        <>
            {isClicked === true && <NewBikeForm/>}
            <div className="add-button"  onClick={handleClick}>+</div>
        </>
    )
}

export default NewBike
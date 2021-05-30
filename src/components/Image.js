import React, { useContext } from 'react'
import './Image.css'
import { ImageContext } from '../contex/state'


const Image = (props) => {

    const {title, farm, server, secret, id} = props

    const {addToBookmarks, bookmarks} = useContext(ImageContext)

    const imgPath = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

    const savedImage = bookmarks.find(image => image.id === id)

    const btnDisabler = savedImage ? 1 : 0

    return (

        <div className='col s12 m6 l4 image-wrapper'>
            <img className='card-image' src={imgPath} alt={title}/>
            <button
                className="btn grey darken-4"
                onClick={()=> addToBookmarks(props)}
                disabled={btnDisabler}
            >
                В избранное
            </button>

        </div>
    )
}

export default Image



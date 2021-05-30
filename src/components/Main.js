import React, { useContext } from 'react'
import Search from './Search'
import { ImageContext } from '../contex/state'
import { API_URL } from '../config'
import ImageList from './ImageList'

const Main = () => {

    const {setImages,setResponseData} = useContext(ImageContext)

    const getImages = (query) => {
        try {
            if(query.trim() !== ''){
                fetch(`${API_URL}${query}`)
                    .then(response => response.json())
                    .then(data => {
                        setResponseData(data.photos)
                        setImages(data.photos.photo)
                    })
            } else {
                setImages([])
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='container content grey darken-3'>
            <Search getImages={getImages}/>
            <ImageList />
        </div>
    )
}

export default Main
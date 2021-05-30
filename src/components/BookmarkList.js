import React, { useContext } from 'react'
import './ImageList.css'
import { ImageContext } from '../contex/state'
import BookmarkItem from './BookmarkItem'

const BookmarkList = () => {

    const {bookmarks} = useContext(ImageContext)

    return (
        <div className='container content grey darken-3 '>
            {!bookmarks.length
                ? <h4>You have no bookmarks yet :)</h4>
                : null
            }
            <div className='images'>
                {
                    bookmarks.map(bookmark => (<BookmarkItem key={bookmark.id} {...bookmark} />))
                }
            </div>

        </div>
    )
}

export default BookmarkList
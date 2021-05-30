import { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import {
    ADD_TO_BOOKMARKS,
    SET_IMAGES,
    SET_RESPONSE_DATA,
    REMOVE_FROM_BOOKMARKS

} from './actions'

const initialState = {
    responseData: {},
    images: [],
    bookmarks: [],

}

export const ImageContext = createContext()

export const ImageProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    state.setResponseData = (data) => {
        dispatch({type: SET_RESPONSE_DATA, payload: data})
    }

    state.setImages = (data) => {
        dispatch({type: SET_IMAGES, payload: data})
    }

    state.addToBookmarks = (image) => {
        dispatch({type: ADD_TO_BOOKMARKS, payload: image})
    }
    state.removeFromBookmarks = (id) => {
        dispatch({type: REMOVE_FROM_BOOKMARKS, payload: id})
    }


    return (
        <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
    )
}
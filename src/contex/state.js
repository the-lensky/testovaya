import { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import {
    ADD_TO_BOOKMARKS,
    SET_IMAGES,
    SET_RESPONSE_DATA,
    REMOVE_FROM_BOOKMARKS,
    FETCH_NEXT_PAGE, FETCH_PREV_PAGE
} from './actions'

const initialState = {
    responseData: {},
    currentPage: 1,
    images: [],
    bookmarks: localStorage.getItem('bookmarks')
        ? JSON.parse(localStorage.getItem('bookmarks'))
        : [],
}

export const ImageContext = createContext()

export const ImageProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    }, [state])


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

    state.setNextPage = () => {
        dispatch({type: FETCH_NEXT_PAGE})
    }

    state.setPrevPage = () => {
        dispatch({type: FETCH_PREV_PAGE})
    }

    return (
        <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
    )
}
import { ADD_TO_BOOKMARKS, SET_IMAGES, SET_RESPONSE_DATA, REMOVE_FROM_BOOKMARKS } from './actions'

export function reducer(state, action) {
    switch (action.type) {

        case SET_IMAGES: {
            return {
                ...state,
                images: action.payload || []
            }
        }

        case SET_RESPONSE_DATA: {
            return {
                ...state,
                responseData: {...state.responseData, responseData: action.payload}
            }
        }

        case ADD_TO_BOOKMARKS: {
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload] || []
            }
        }

        case REMOVE_FROM_BOOKMARKS: {
            return {
                ...state,
                bookmarks: state.bookmarks.filter(image => image.id !== action.payload)
            }
        }



        default:
            return state
    }
}
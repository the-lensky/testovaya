import React, { useContext } from 'react'
import { ImageContext } from '../contex/state'

const Pagination = ({getNextPage}) => {

    const {responseData, setNextPage, setPrevPage} = useContext(ImageContext)

    const {page, pages, perpage} = responseData

    const totalPageCount = Math.ceil(pages / perpage)

    const disablePrevBtn = page < 2 ? true : false
    const disableNextBtn = page >= totalPageCount ? true : false

    return (
        <div>
            <button disabled={disablePrevBtn} onClick={setPrevPage}>PREV</button>
            <span>{`Page ${page} of ${totalPageCount}`}</span>
            <button disabled={disableNextBtn} onClick={setNextPage}>NEXT</button>

            {/*<ul className="pagination ">*/}
            {/*    <li ><button  onClick={setPrevPage} disabled={disablePrevBtn ? 'disabled' : ''}><i className="material-icons">chevron_left</i></button></li>*/}
            {/*    <li className="active"><a href="#">{`Page ${page} of ${totalPageCount}`}</a></li>*/}
            {/*    <li ><button  onClick={setNextPage} disabled={disableNextBtn ? 'disabled' : ''}><i className="material-icons">chevron_right</i></button></li>*/}
            {/*</ul>*/}
        </div>
    )
}
//
export default Pagination
import React from "react";

const Pagination = ({changePage, nowPage, fulling}) => {



    return (
        <div className="buttons">
            {fulling.map((p, index) => {
            return <button className={nowPage === p ? 'pageButtons buttonActive' : 'pageButtons'} onClick={() => changePage(p)}>
                {p}
            </button>
            })}
        </div>
    )
}

export default Pagination
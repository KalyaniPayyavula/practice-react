import React from 'react'
function List(props){
    const stuList = props.list
    stuList.forEach((ele) => {
            return(
                <div>
                    <span>{ele.firstname}</span>
                    <span>{ele.lastname}</span>
                </div>
            )
        })
}

export default List;
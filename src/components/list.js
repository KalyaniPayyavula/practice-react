import React from 'react'
function List(props){
    const nameList = []
    const stuList = props.list
       stuList.forEach((ele, i) => {
            nameList.push(<span key={`${i} ${ele.firstname}`}>{`FirstName : ${ele.firstname}  LastName : ${ele.lastname} `}</span>)
        })
              return(
                <div>{nameList}</div>
              )          
     
}

export default List;
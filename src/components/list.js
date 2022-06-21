import React from 'react'
import './list.css'
import PropTypes from 'prop-types'

function List(props){
return(
  <div className='listStyle'>
    <span>{props.item.firstName}</span>
    <span>{props.item.lastName}</span>
    <button name={props.item.firstName} onClick={props.onClick}>DELETE</button>
</div>
)
}
export default List
List.propTypes = {
  name: PropTypes.string
}
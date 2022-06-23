import React from 'react'
import './list.css'
import PropTypes from 'prop-types'
function List({item,onClick}){
return(
  <div className='listStyle' id="addednameId">
    <span>{item.firstName}</span>
    <span>{item.lastName}</span>
    <button name={item.firstName} id="deleteId" onClick={onClick}>DELETE</button>
</div>
)}
export default List
List.propTypes = {
  item : PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
  }
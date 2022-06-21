import React from 'react'
import './list.css'
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types'

function AddItem(props){

    let firstNameval = "";
    let lastNameval = "";
    function handleFirstName(e){
     firstNameval = e.target.value
     return firstNameval
    }

    function handleLastName(e){
         lastNameval = e.target.value
        return lastNameval
       }
    function addItemToList(e){
      let  newStudent = {
           firstName : firstNameval,
           lastName : lastNameval
       }
       props.itemsList.push(newStudent)
       props.addtoList([...props.itemsList])
    }
    return(
        <div >
    <Popup trigger={<button onClick={props.onClick} id="popupId" className='addItemStyle'>+</button>} position="bottom rightS">
      <div id="popupStyle">
      <div>
     <span>Enter First Name :</span>
     <input onChange={handleFirstName} id="firstnameId"></input>
   </div>
   <div>
<span>Enter Last Name :</span>
     <input onChange={handleLastName} id="lastnameId"></input>
  </div>
  <button onClick={addItemToList} id="clickId">Add</button>
      </div>  
    </Popup>
  </div>
    )
    }
export default AddItem;

AddItem.propTypes = {
  itemsList: PropTypes.array
}
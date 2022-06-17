import React from 'react'
import './list.css'
import Popup from 'reactjs-popup';
let newStudent;
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
        newStudent = {
           firstName : firstNameval,
           lastName : lastNameval
       }
       props.itemsList.push(newStudent)
       props.addtoList([...props.itemsList])
    }
    return(
        <div >
    <Popup trigger={<button onClick={props.onClick} className='addItemStyle'>+</button>} position="bottom rightS">
      <div id="popupStyle">
      <div>
     <span>Enter First Name :</span>
     <input onChange={handleFirstName}></input>
   </div>
   <div>
<span>Enter Last Name :</span>
     <input onChange={handleLastName}></input>
  </div>
  <button onClick={addItemToList}>Add</button>
      </div>  
    </Popup>
  </div>
    )
    }
export default AddItem;
export {newStudent}
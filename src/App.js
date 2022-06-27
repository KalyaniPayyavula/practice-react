 import React,{useState} from 'react'
import List from './components/list'
import AddItem from './components/addList'

const studentsList = [
  {firstName : "Reshitha", lastName : "Pathi"},
  {firstName : "Rivansh", lastName : "Kilari"},
  {firstName : "Skandhana", lastName : "Pathi"},
  {firstName : "Kalyani", lastName : "Payyavula"},
]

function App(){

  const [list, setList] = useState(studentsList)

  function deleteListItem(e){
    setList(list.filter(ele => ele.firstName !== e.target.name ))   
  }
  
  return(
    <div> 
     <AddItem addtoList={setList} itemsList={list}></AddItem>
    <div>
      {list.map((ele, k) =>{
     return <List item={ele} 
     key={`${k} ${ele.firstName} ${ele.lastName}`}
     onClick = {deleteListItem}
    ></List>
      })}     
    </div>
    </div>
  )
}
  export default App;

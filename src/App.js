import React from 'react'
import List from './components/list'
const studentDetails = [
  {firstname: "Reshitha", lastname: "Pathi"},
  {firstname: "Rivansh", lastname: "Kilari"},
  {firstname: "Skandhana", lastname: "Pathi"}
]

function App() {
  return (
    <div>
      <List list={studentDetails}></List>
    </div>
  );
}

export default App;

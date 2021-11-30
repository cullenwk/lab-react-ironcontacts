// src/App.js
import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'


function App() {
  const [allContacts, setContact] = useState(contacts.slice(0, 10))

  function handleAdd() {
    let randomElement = contacts[Math.floor(Math.random ()* contacts.length)]
    let newArray = [randomElement, ...allContacts]
    setContact(newArray)
}
function handleSort(){
  let clone = JSON.parse(JSON.stringify(allContacts))
  clone.sort((first, second) => {
      if (first.name > second.name) {
          return 1
      }
      else if (first.name < second.name) {
          return -1
      }
      else {
          return 0
      }
  })

  setContact(clone)
}

function handleSort(){
  let clone = JSON.parse(JSON.stringify(allContacts))
  clone.sort((highest, lowest) => {
      if (highest.popularity > lowest.popularity) {
          return -1
      }
      else if (highest.popularity < lowest.popularity) {
          return 1
      }
      else {
          return 0
      }
  })

  setContact(clone)
}

function handleDelete(id){
  let filteredContacts = allContacts.filter((elem) => {
      return elem.id !== id
  })
  setContact(filteredContacts)
}
  return (
  
  <div className="App">
     <h1>IronContact</h1>
     <button onClick={handleAdd}> Add Random Contact</button>
     <button onClick={handleSort}> Sort Name </button>
     <button onClick={handleSort}> Sort Popularity </button>
    
    {
     allContacts.map((elem, index) => {
        return (
            <div key={elem.id, index} >
              <table>
                <tr>
               <th>Pictures</th>  
               <th>Name</th>   
               <th>Popularity</th>   
               <th>Won Emmy</th>   
               <th>Won Oscar</th>   
               <th>Actions</th>    
              </tr>

              <tr>
              <td><img style={{width: "100px"}} src= {elem.pictureUrl} alt= "pic"/></td>
              <td>{elem.name}</td>
              <td>{Math.round(elem.popularity *100) / 100 }</td>
              <td>{elem.wonEmmy ? '🏆 ': '' }</td>
              <td>{elem.wonOscar ? '🏆 ': ''}</td>
              <td><button onClick={() => { handleDelete(elem.id) }}>Delete</button></td>
              </tr>

              </table>  

            </div>
        )

        
     })
        

  
    }
</div>
  )
    
}


export default App;

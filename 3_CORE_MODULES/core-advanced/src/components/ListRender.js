import { useState } from "react"

const ListRender = () => {

const [list] = useState(["Matheus","Pedro","Josias"])
const [users, setUsers] = useState([
    {id:1, name:"Matheus", age:42},
    {id:2, name:"Maria", age:43},
    {id:3, name:"Osvaldo", age:45},
    {id:4, name:"Olga", age:52},
])

const deleteRandom = ()=>{
    const randomnumber = Math.floor(Math.random() * users.length)

    setUsers((prevUsers)=>{
        return prevUsers.filter((user)=> randomnumber !== user.id)
    })
}    

  return (
    <div>
        <ul>
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {
                users.map((user)=>
                (    <li key={user.id}>{user.name}</li>)
                )
            }
        </ul>
        <button onClick={deleteRandom}> usDelete Randon User</button>
    </div>
    
  )
}

export default ListRender
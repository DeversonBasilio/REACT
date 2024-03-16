import {useState} from 'react'

const ManageData = () => {

  let SomeData = 10

  const [number, setNumber] = useState(12)

  return (
    <div>
        <p>Valor : {SomeData}</p>
        <button onClick={()=> (SomeData=15)}>Button Var</button>

        <p>Valor do State: {number}</p>
        <button onClick={()=> setNumber(number + 10)}>Button State</button>
    </div>
  )
}

export default ManageData
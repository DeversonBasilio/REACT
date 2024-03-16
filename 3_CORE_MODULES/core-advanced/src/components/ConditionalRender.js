import { useState } from "react"

const ConditionalRender = () => {
const [x, setX] = useState(true)
const mudaState = ()=> {
    setX((prevX)=>{
        console.log(prevX)
        return !prevX
    })
}

const [name] = useState("João")

  return (
    <div>ConditionalRender
        <h1>Isso será exibido</h1>
        {x && <p>Sim</p>}
        {!x && <p>Nao</p>}
        <button onClick={mudaState}>Exibe ou não</button>

        {name === "João" ? (<h1>Joaõ encontrado</h1>):(<h1>Joaõ não encontrado</h1>)}
    </div>

  )
}

export default ConditionalRender
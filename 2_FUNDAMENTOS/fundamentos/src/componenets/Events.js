const Events = ()=>{

    const handleMyEvent = (e)=> {
        console.log(`Sou o evento do botão ${e}`)
    }

    const renderingSomething = (x) => {
        if(x){
        return (<h1>o valor de X é verdadeiro</h1>)
        }
        else {
            return (<h1>o valor de X é falso</h1>)
        }
    }
    return (
    <div>
        {renderingSomething(true)}
        <div>
            <button onClick={handleMyEvent}>Click No Botão</button>
        </div>
        <div>
            <button onClick={()=> console.log('CLICOU')}>Segundo Botao</button>
        </div>
        {renderingSomething(false)}
    </div>)
}

export default Events
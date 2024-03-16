const Challenge = ()=> {

    var numb = 1
    var numb2 = 3.15

    const sumEverything = ()=> {

        console.log(`A soma de ${numb} + ${numb2} é igual a ${numb+numb2}`)
    }
    return (
        <div>
            <div> The first value is {numb}</div>
            <div> The Second value is {numb2}</div>
            <button onClick={sumEverything}>Soma-los</button>
        </div>
    )
}

export default Challenge
const TemplateExpressions = ()=>{
    
    const name = 'Matheus'
    const data = {
        age: 31,
        job: 'phisics'
    }

    return (
        <div>
            <h2>Olá {name} de {data.age} anos, vi que trabalha como {data.job}</h2>
        </div>
    )
}

export default TemplateExpressions 
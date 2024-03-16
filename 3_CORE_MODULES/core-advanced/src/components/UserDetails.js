const UserDetails = ({nome, idade, profissao}) => {
  return (
    <>
        <h4>User Details</h4>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
        <p>Pode Tirar Carteira: {idade >= 18 ? "Sim": "Não"}</p>
    </>
    

  )
}

export default UserDetails
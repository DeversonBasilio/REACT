import React from 'react'

const CarDetails = ({brand, KM, cor}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {KM}</li>
            <li>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails
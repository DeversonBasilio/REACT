import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {

  const {modelo,marca,KM,estado} = car
  return (
    <div class={styles.CarDetails}>
        <h3>{modelo}</h3>
        <div>
            <span> Marca:{marca}</span>
            <span> KM rodados:{KM}</span>
            <span> Estado:{estado}</span>
        </div>
    </div>
  )
}

export default CarDetails
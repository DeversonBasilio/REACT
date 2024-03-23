import CarDetails from "./CarDetails"
import styles from './Car.module.css'

const Cars = () => {

  const allCars = [
    {modelo:"UNO",marca:"FIAT",KM:120000,estado:"Usado"},
    {modelo:"GOL",marca:"VW",KM:400,estado:"Semi-novo"},
    {modelo:"401",marca:"Ferrari",KM:0,estado:"Sucata"},
  ]

  
    const myCars = allCars.map((car)=>(
        <CarDetails car={car} />
    ))

    return (<div className={styles.CarCard}>{myCars}</div>)
  
}

export default Cars
import './PrepareCoffe.css'
import { useContext } from 'react'
import { userContext } from '../../App'

function PrepareCoffe() {
    const {
        coffeGr,
        setCoffeGr,
        waterMl,
        setWaterMl,
        cups,
        setCups,
        increment,
        decrement
    } = useContext(userContext)

    return (
        <div className='PrepareCoffe'>
            <div className="PrepareCoffeDivButtons">
                <div className="PrepareCoffeP">
                    <p>coffe gr</p>
                </div>
                <div className="PrepareCoffeButtons">
                    <span onClick={() => {
                        decrement(coffeGr, setCoffeGr)
                    }} className="Rest">-</span>
                    <p className='Count'>{coffeGr}</p>
                    <span onClick={() => {
                        increment(coffeGr, setCoffeGr)
                    }} className="Plus">+</span>
                </div>
            </div>
            <div className="PrepareCoffeDivButtons">
                <div className="PrepareCoffeP">
                    <p>water ml</p>
                </div>
                <div className="PrepareCoffeButtons">
                    <span onClick={() => {    
                        decrement(waterMl,setWaterMl)
                    }} className="Rest">-</span>
                    <p className='Count'>{waterMl}</p>
                    <span onClick={() => {
                        increment(waterMl,setWaterMl)
                    }} className="Plus">+</span>
                </div>
                </div>
            <div className="Cups">
                <div className="Cups-p">
                    <p>cups</p>
                </div>
                <div className="PrepareCoffeButtonsCup">
                    <span onClick={() => {
                        decrement(cups, setCups)
                    }} className="Rest">-</span>
                    <p className="Count CountCup">{cups}</p>
                    <span onClick={() => {
                        increment(cups, setCups)
                    }} className="Plus">+</span>
                </div>
            </div>
        </div>
    )
}

export { PrepareCoffe }
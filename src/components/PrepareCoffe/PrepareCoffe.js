import './PrepareCoffe.css'
import { PrepareCoffeGr } from './PrepareCoffeComponets/CoffeGr/PrepareCoffeGr'
import { PrepareCoffeMl } from './PrepareCoffeComponets/WaterMl/PrepareCoffeMl'
import { PrepareCoffeCups } from './PrepareCoffeComponets/CoffeCup/PrepareCoffeCups'

function PrepareCoffe() {
    return (
        <div className='PrepareCoffe'>
            <PrepareCoffeGr />
            <PrepareCoffeMl />
            <PrepareCoffeCups />
        </div>
    )
}

export { PrepareCoffe }
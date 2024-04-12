import './PrepareCoffe.css'
import { PrepareCoffeRatio } from './PrepareCoffeComponets/CoffeRatio/PrepareCoffeRatio'
import { PrepareCoffeMl } from './PrepareCoffeComponets/CoffeMl/PrepareCoffeMl'
import { PrepareCoffeGr } from './PrepareCoffeComponets/CoffeGr/./PrepareCoffeGr'

function PrepareCoffe() {
    return (
        <div className='PrepareCoffe'>
            <PrepareCoffeRatio />
            <PrepareCoffeGr />
            <PrepareCoffeMl />
        </div>
    )
}

export { PrepareCoffe }
import './CardPrepareCoffe.css'
import { CoffeCup } from '../CoffeCup/CoffeCup'
import { PrepareCoffe } from '../PrepareCoffe/PrepareCoffe'
import { Slider } from '../Slider/Slider'

function CardPrepareCoffe() {
    return (
        <div className='CardPrepareCoffeDiv'>
            <CoffeCup className='CoffeCup' />
            <PrepareCoffe className='PrepareCoffe' />
            <Slider className='Slider' />
        </div>
    )
}

export { CardPrepareCoffe }
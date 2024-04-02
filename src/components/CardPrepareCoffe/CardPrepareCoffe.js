import { CoffeCup } from '../CoffeCup/CoffeCup'
import { PrepareCoffe } from '../PrepareCoffe/PrepareCoffe'
import { Slider } from '../Slider/Slider'

function CardPrepareCoffe() {
    return (
        <div>
            <CoffeCup />
            <PrepareCoffe />
            <Slider />
        </div>
    )
}

export { CardPrepareCoffe }
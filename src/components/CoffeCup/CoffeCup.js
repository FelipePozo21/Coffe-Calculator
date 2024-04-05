import './CoffeCup.css'
import { ReactComponent as CoffeSVG } from '../svg/cup-coffe.svg'
import { useContext } from 'react'
import { userContext } from '../../App'

function CoffeCup() {
    const coffeName = useContext(userContext)

    return (
        <div className='divCoffeSVG'>
            <CoffeSVG className='CoffeSVG'/>
            <p className='CoffeSVGP'>{coffeName.newName}</p>
        </div>
    )
}
export { CoffeCup }
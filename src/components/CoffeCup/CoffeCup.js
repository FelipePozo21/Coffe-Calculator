import './CoffeCup.css'
import { ReactComponent as CoffeSVG } from '../svg/cup-coffe.svg'
import { useContext } from 'react'
import { userContext } from '../../App'

function CoffeCup() {
    const {newName} = useContext(userContext)
    return (
        <div className='divCoffeSVG'>
            <CoffeSVG className='CoffeSVG'/>
            <p className='CoffeSVGP'>{newName.name}</p>
        </div>
    )
}
export { CoffeCup }
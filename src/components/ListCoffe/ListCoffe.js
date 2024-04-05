import "./ListCoffe.css"
import { useContext } from "react"
import { userContext } from "../../App"

function ListCoffe() {
  
  const {
    CoffeDataName,
    ChangeColor
  } = useContext(userContext)

    return (
      CoffeDataName.map(e => (
        <li 
          className={e.completed ? "liTrue" : "liFalse"}
          onClick={() => {
          ChangeColor(e)
        }} key={e.name}>{e.name}</li>
       ))
    )
}

export { ListCoffe }
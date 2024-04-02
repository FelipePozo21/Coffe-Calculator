import "./ListCoffe.css"

function ListCoffe({CoffeName}) {
    return (
       CoffeName.map(e => (
         <li key={e}>{e}</li>
       ))
    )
}

export { ListCoffe }
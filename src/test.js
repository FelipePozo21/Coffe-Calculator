function Test({state}) {
    console.log(state)
    return (
       <ul>
         {state.map(e => (
           <li key={e.name}>{e.name}</li>
        ))}
       </ul>
    )
}

export { Test }
import './App.css';
import React from 'react';
import { dataCoffe } from './Data/DataCoffeJson.js';
import { Container } from './components/Container/Container.js'
import { ListCoffe } from './components/ListCoffe/ListCoffe.js';
import { CardPrepareCoffe } from './components/CardPrepareCoffe/CardPrepareCoffe'

export const userContext = React.createContext()

function App() {
  const [state, setState] = React.useState(dataCoffe)
  const [newName, setNewName] = React.useState('espresso')
  const [coffeGr, setCoffeGr] = React.useState(0)
  const [waterMl, setWaterMl] = React.useState(0)
  const [cups, setCups] = React.useState(0)

  const ChangeColor = (e) => {
    let newState = [...state]
    newState.forEach(e => e.completed = false)
    let index = newState.findIndex(name => name.name === e.name)
    newState[index].completed = true
    setState(newState)
    setNewName(newState[index].name)
  }

  const CoffeDataName = state.map(e => {
    return e
  })
    
  const increment = (value, setValue) => {
    setValue(value + 1)
  }

  const decrement = (value, setValue) => {
    setValue(value - 1)
  }

  return (
   <>
    <userContext.Provider value={{
      newName,
      ChangeColor,
      CoffeDataName,
      coffeGr,
      setCoffeGr,
      waterMl,
      setWaterMl,
      cups,
      setCups,
      increment,
      decrement
    }}>
      <main>
        <Container className='Container'>
          <ListCoffe />
        </Container>
        <CardPrepareCoffe className='CardPrepareCoffe'/>
      </main>
    </userContext.Provider>
   </>
  );
}

export default App;

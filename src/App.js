import './App.css';
import React from 'react';
import { dataCoffe } from './Data/DataCoffeJson.js';
import { Container } from './components/Container/Container.js'
import { ListCoffe } from './components/ListCoffe/ListCoffe.js';
import { CardPrepareCoffe } from './components/CardPrepareCoffe/CardPrepareCoffe'

export const userContext = React.createContext()

function App() {
  const [state, setState] = React.useState(dataCoffe)
  const [newName, setNewName] = React.useState(dataCoffe[0])
  const [coffeGr, setCoffeGr] = React.useState(130)
  const [waterMl, setWaterMl] = React.useState(200)
  const [cups, setCups] = React.useState(1)
  const [slider, setSlider] = React.useState(10)

  const ChangeColor = (e) => {
    let newState = [...state]
    newState.forEach(e => e.select = false)
    let index = newState.findIndex(name => name.name === e.name)
    newState[index].select = true
    setState(newState)
    setNewName(newState[index])
    calcCoffe(newState[index])
  }

  const CoffeDataName = state.map(nameCoffe => {
    return nameCoffe
  })
    
  const increment = (value, setValue, number) => {
    setValue(value + number)
  }

  const decrement = (value, setValue, number) => {
    let calc = value - number
    if (calc > 0) setValue(calc)
    else setValue(0)
  }

  const calcCoffe = (coffe) => {
    const strength = coffeGr / waterMl * coffe.strengthDeterminant
    const strengthCups = cups !== 0 ? strength / cups : 0.2

    console.log(strengthCups)

    let strengthTotal = parseInt((strengthCups.toFixed(1)) * 10)
    let sliderStrength = 100 / strengthTotal
    console.log(strength)

    setSlider(sliderStrength)
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
      decrement,
      slider,
      calcCoffe
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

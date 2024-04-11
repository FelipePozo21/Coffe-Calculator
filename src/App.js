import './App.css';
import React, { useEffect } from 'react';
import { dataCoffe } from './Data/DataCoffeJson.js';
import { Container } from './components/Container/Container.js'
import { ListCoffe } from './components/ListCoffe/ListCoffe.js';
import { CardPrepareCoffe } from './components/CardPrepareCoffe/CardPrepareCoffe'
import { jsx } from 'react/jsx-runtime';

export const userContext = React.createContext()

function App() {
  const [state, setState] = React.useState(dataCoffe)
  const [newName, setNewName] = React.useState(dataCoffe[0])
  const [slider, setSlider] = React.useState(20)
  const [ratioCoffe, setRatioCoffe] = React.useState([1])
  const [ratioWater, setRatioWater] = React.useState([12])
  const [coffeeGr, setCoffeeGr] = React.useState(24)
  const [water, setWater] = React.useState(150)
  
  const ChangeColor = (e) => {
    let newState = [...state]
    newState.forEach(e => e.select = false)
    let index = newState.findIndex(name => name.name === e.name)
    newState[index].select = true
    setState(newState)
    setNewName(newState[index])
  }

  useEffect(() => {
    if(ratioCoffe < ratioWater) {
      setWater((coffeeGr * ratioWater) / ratioCoffe)
    } else if(ratioCoffe > ratioWater){
      setWater((coffeeGr * ratioWater) * ratioCoffe)
    } else if(ratioCoffe === ratioWater) {
      setWater(ratioCoffe)
    }
  },[coffeeGr, ratioCoffe, ratioWater])

  useEffect(() => {
    if(!isFinite(water)) {
      setWater(0)
    }
  }, [water])

  const CoffeDataName = state.map(nameCoffe => {
    return nameCoffe
  })

  return (
   <>
    <userContext.Provider value={{
      newName,
      ChangeColor,
      CoffeDataName,
      slider,
      ratioCoffe, 
      setRatioCoffe,
      ratioWater,
      setRatioWater,
      coffeeGr,
      setCoffeeGr,
      water,
      setWater
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

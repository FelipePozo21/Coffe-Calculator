import './App.css';
import React from 'react';
import { dataCoffe } from './Data/DataCoffeJson.js';
import { Container } from './components/Container/Container.js'
import { ListCoffe } from './components/ListCoffe/ListCoffe.js';
import { CardPrepareCoffe } from './components/CardPrepareCoffe/CardPrepareCoffe'

function App() {
  const [state, setState] = React.useState(dataCoffe)

  const CoffeDataName = state.map(e => {
    return e.name
  })
    
  return (
   <>
    <main>
      <Container className='Container'>
        <ListCoffe CoffeName={CoffeDataName}/>
      </Container>
      <CardPrepareCoffe className='CardPrepareCoffe'/>
    </main>
   </>
  );
}

export default App;

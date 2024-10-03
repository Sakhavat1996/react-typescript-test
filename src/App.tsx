import './App.css'
import ToDos from './components/ToDo';
import ToDo from './models/ToDo';
function App() {
  let a : string ;
  a = 'sadsda';
  console.log(a);
  const elements  = [
    new ToDo('Baku'),
    new ToDo('Sumgait')
  ]
  return (
    <>
      <ToDos items={elements}/>
    </>
  )
}

export default App

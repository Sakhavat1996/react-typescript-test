import './App.css'
import ToDos from './components/Layout';
import TodosContextProvider from './store/storeTodos';
function App() {
  return (
    <TodosContextProvider>
      <ToDos/>
    </TodosContextProvider>
  )
}

export default App

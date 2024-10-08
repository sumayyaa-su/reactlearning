import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Counter1 from './components/counter1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Provider store={store}>
        <Counter1/>
      </Provider>
    </div>
    
    </>
  )
}

export default App

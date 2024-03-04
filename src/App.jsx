import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value)
  }

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button>add</button>
      </div>
    </div>
  )
}

export default App

import React from 'react'

const App = () => {
  function showMessage(name) {
    alert("Hello " + name);
  }
  return (
    <div>
      <button onClick={() => showMessage("Satyam")}> Click me</button>
    <div>
        <button onClick={() => alert("Button clicked!")}> Click me again </button>
        </div>
      </div>
  )
}

export default App
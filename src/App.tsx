import './App.css'

import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import { styled } from 'config/theme'
import React, { useState } from 'react'
import { BsDice5 } from 'react-icons/bs'

import viteLogo from '/vite.svg'

import reactLogo from './assets/react.svg'

const TestTheme = styled('div', {
  color: '$primary500',
  fontFamily: '$loopless',
  fontSize: '$24',
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button icon={BsDice5} />
      <Button label="Hello" icon={BsDice5} />
      <Typography variant="h5" color="primary700">
        Hello
      </Typography>
      <TextField label="Hello" placeholder="Hello" helperText="Hello" />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <TestTheme>Vite + React</TestTheme>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

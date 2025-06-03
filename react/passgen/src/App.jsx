import { useState, useCallback ,useEffect, useRef, use} from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setNumAllowed] = useState(true)
  const [charallowed, setCharAllowed] = useState(true)
  const [password , setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatepass  =  useCallback(() => {
    
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numallowed) characters += '0123456789'
    if (charallowed) characters += '!@#$%^&*()_+[]{}|;:,.<>?'

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      newPassword += characters[randomIndex]
    }
    setPassword(newPassword)
  }, [length, numallowed, charallowed,setPassword]);
  useEffect(() => {
    generatepass()
  }
  , [length, numallowed, charallowed, generatepass]);
  const copytoclip =useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
    .then(() => {
      alert('Password copied to clipboard!')
    })

  }
,[password]);
  return (
    <>
      <div className="bg-black flex items-center min-h-screen w-full">
  <div className="w-full max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md text-white overflow-hidden">

    <h1 className="text-xl text-white text-center mb-4 w-full">
      Password Generator
    </h1>
    <div className="flex items-center">
      <input
        type="text"
        value={password}
        readOnly
        placeholder="Generated Password"
        ref={passwordRef}
        className="bg-gray-700 border border-gray-600 rounded-md p-2 flex-1"
      />
      <button onClick={() => {copytoclip()}}
        className="bg-blue-400 outline-none text-white px-3 py-0.5 shadow-md rounded-lg ml-2 hover:bg-blue-500"
      >
        Copy
      </button>
    </div>
      <div className='flex items-center text-m gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max = {40} value={length} onChange={(e) => setLength(e.target.value)}></input>
        <label htmlFor="length">{length}</label>  
        </div>
        <div className='flex items-center gap-x-1'><input type="checkbox" checked={numallowed} onChange={(e) => setNumAllowed(e.target.checked)}></input>
        <label htmlFor="Numbers">Numbers</label></div>

        <div className='flex items-center gap-x-1'><input type='checkbox' checked={charallowed} onChange={(e) => setCharAllowed(e.target.checked)}></input>
        <label htmlFor="Special Characters">Characters</label></div>
      </div>
    </div>

  </div>

</>

    

  )
}

export default App

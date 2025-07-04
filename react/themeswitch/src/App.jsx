import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light");
  useEffect(()=>{
    
    document.documentElement.classList.remove("light","dark");
    document.documentElement.classList.add(themeMode);
  },[themeMode])
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
                     <ThemeBtn/>   
                    </div>
                    <Card/>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
      </div>
      </ThemeProvider>

    </>
  )
}

export default App

import {useRoutes } from 'react-router-dom'
import routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { useState } from 'react'
import './App.css'
function App() {
  const [darkMode,setDarkMode] = useState(false)

  const darkModeHandler = ()=>{
    console.log("ok");
    
    setDarkMode((darkMode)=> !darkMode)
  }


  const router  = useRoutes(routes)
  return (
    <div className={darkMode ?"dark mobile__mode" : "mobile__mode" }>
    <Header darkModeHandler = {darkModeHandler} darkMode = {darkMode}/>
    <div className="container px-0 pb-5">
        <main className="main ">
          <div className="row justify-content-between mx-0 main__change">
          <Sidebar/>
      {router}
      </div>
        </main>
      </div>
    </div>
  )
}

export default App

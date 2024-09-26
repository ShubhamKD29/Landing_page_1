import { useRef, useState, useEffect } from 'react'
import Background from './Components/Background/Background'
import Mainpage from './Components/Mainpage/Mainpage'
import Navigation from './Components/Navigationbar/Navigationbar'

function App() {

 let changeText = [
    {text1:'Unlease The Beast !!', text2:'Welcome To Mahindra'},
    {text1:'Powerpacked Engine,', text2:'Powerful Perfomance'},
    {text1:'Live Young,', text2:'Live Free'},
  ]

  const [landingpageCount, setLandingpageCount] = useState(0)
  const [playstatus, setPlayStatus] = useState(false)
  const intervalRef = useRef(null)
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLandingpageCount((count) => count === 2 ? 0 : count+1)
    },2000)
  },[])


  return (
    <>
      <Background playstatus={playstatus} landingpageCount={landingpageCount} />
      <Navigation />
      <Mainpage changeText={changeText[landingpageCount]} 
      landingpageCount={landingpageCount} 
      setLandingpageCount={setLandingpageCount}
      setPlayStatus = {setPlayStatus}
      playstatus= {playstatus}
      />
    </>
  )
}

export default App

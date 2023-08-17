import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from "./components/SharedLayout";
import Profile from "./components/Profile";
import data from "./data"
import Form from "./components/Form";

export const AppContext = createContext()

function App() {
  const [actualImg, setActualImg] = useState(0);
  const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if(isRightSwipe) changeSlide(-1);
  if(isLeftSwipe) changeSlide(1)
}

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (actualImg + direction < 0) {
      slideNumber = data[0].img.length - 1;
    } else {
      slideNumber = (actualImg + direction) % data[0].img.length;
    }
    setActualImg(slideNumber);
  };

  const goToSlide = (number) => {
    setActualImg(number % data[0].img.length);
  };

  return (
    <div className="body" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
       <AppContext.Provider  value={{data, actualImg, setActualImg, goToSlide, changeSlide}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout/>}> 
                <Route index element={<Profile/>}/>
                <Route path='form' element={<Form/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
         
         
      
       </AppContext.Provider>
     
    </div>
  )
}

export default App

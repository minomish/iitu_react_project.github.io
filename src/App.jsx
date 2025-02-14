import { useState } from 'react'
import './App.css'

import courses from "./data/courses";

import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CourseInfo from './components/CourseInfo/CourseInfo/CourseInfo'
import CourseEnrollment from './components/CourseEnrollment/CourseEnrollment';
import Faculty from './components/Faculty/Faculty';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='wrapper'>
        <About/>
        <CourseInfo courses={courses} />
        <CourseEnrollment courses={courses}/>
        <Faculty/>
      </div>
      <Footer/>
    </>
  )
}

export default App

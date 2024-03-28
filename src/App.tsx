import { useState } from "react"
import "./App.css"
import Calculator from "./components/calculator/Calculator"
import Navbar from "./components/navbar/Navbar"
import { twoSum } from "./question3"

function App() {
  console.log(twoSum([2, 7, 11, 15], 9))
  console.log(twoSum([2, 3, 4], 6))
  console.log(twoSum([-1, 0], -1))
  return (
    <>
      <Navbar />
      <Calculator />
    </>
  )
}

export default App

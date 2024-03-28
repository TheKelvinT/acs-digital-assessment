import { useState } from "react"
import "./calculator.scss"
const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [sum, setSum] = useState("")
  const handleAddition = () => {
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber)

    if (!isNaN(num1) && !isNaN(num2)) {
      const total = num1 + num2
      setSum(total.toString())
    } else {
      setSum("Invalid input")
    }
  }

  const handleReset = () => {
    setFirstNumber("")
    setSecondNumber("")
    setSum("")
  }



  return (
    <>
      <div className="calculator">
        <h1>Adding Two Numbers</h1>
        <div className="input-group">
          <label htmlFor="firstNumber">First Number</label>
          <input
            type="number"
            id="firstNumber"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="secondNumber">Second Number</label>
          <input
            type="number"
            id="secondNumber"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>

        <br />
        <div className="button-group">
          <button
            onClick={handleAddition}
            className="button"
            disabled={!firstNumber || !secondNumber}
          >
            Add
          </button>
          <button
            onClick={handleReset}
            className="button"
            disabled={!firstNumber && !secondNumber}
          >
            Reset
          </button>
        </div>
        <div className="total">Total: {sum}</div>
      </div>
    </>
  )
}

export default Calculator

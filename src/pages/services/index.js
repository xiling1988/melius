import React, { useState, useEffect } from 'react'

export default function TipCalculator() {
  let [totalBill, setTotalBill] = useState(50)
  let [tipPercentage, setTipPercentage] = useState(18)
  let [people, setPeople] = useState(1)
  let [totalTip, setTotalTip] = useState(0)
  let [perPerson, setPerPerson] = useState(0)

  const calculateTip = (bill, percentage) => {
    setTotalTip(totalBill * (tipPercentage / 100))
    setPerPerson(totalTip / people)
  }

  useEffect(() => {
    calculateTip(totalBill, tipPercentage)
  }, [totalBill, tipPercentage, people])

  return (
    <>
      <form>
        <label>Bill</label>
        <input
          type='number'
          onChange={(e) => setTotalBill(e.target.value)}
          value={totalBill}
        ></input>
        <label>Tip Percentage</label>
        <input
          type='number'
          onChange={(e) => setTipPercentage(e.target.value)}
          value={tipPercentage}
        ></input>
        <label>Number of People</label>
        <input
          type='number'
          onChange={(e) => setPeople(e.target.value)}
          value={people}
        ></input>
      </form>
      <p>Total Tip: ${totalTip}</p>
      <p>Tip Per Person: ${isNaN(people) ? '-' : perPerson.toFixed(2)}</p>
    </>
  )
}

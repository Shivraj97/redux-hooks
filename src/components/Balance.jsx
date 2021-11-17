import React from "react"
import { useSelector } from "react-redux"

const Balance = () => {
  const balance = useSelector((state) => state.banking.balance.accountBalance)
  return (
    <div>
      <h1>${balance && balance}</h1>
    </div>
  )
}

export default Balance

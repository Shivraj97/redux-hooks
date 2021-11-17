import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  switchAccount,
} from "../actions/bankingActions"

const Banking = () => {
  const [amount, setAmount] = useState("")
  const status = useSelector((state) => state.banking.accountStatus)
  const dispatch = useDispatch()

  const handleDeposit = () => {
    dispatch(deposit(amount))
  }
  const handleWithdraw = () => {
    dispatch(withdraw(amount))
  }
  const handleCollectInterest = () => {
    dispatch(collectInterest())
  }
  const handleDelete = () => {
    dispatch(deleteAccount())
  }
  const handleAccountSwitch = () => {
    dispatch(switchAccount(status))
  }

  return (
    <div className="banking-container">
      <input
        type="text"
        className="form-group lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="btn-container">
        <button className="btn btn-success" onClick={handleDeposit}>
          Deposit
        </button>
        <button className="btn btn-primary" onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className="btn btn-warning" onClick={handleCollectInterest}>
          Collect Interest
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Account
        </button>
        <button className="btn btn-secondary" onClick={handleAccountSwitch}>
          Switch Account
        </button>
      </div>
    </div>
  )
}

export default Banking

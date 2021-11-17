import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleAuth } from "../actions/authActions"

const Auth = () => {
  const isAccountActive = useSelector((state) => state.banking.isAccountActive)
  const isBalanceNegative = useSelector(
    (state) => state.banking.balance.isBalanceNegative
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(toggleAuth())
  }

  return (
    <div>
      <div>Account Status: {isAccountActive ? "Active" : "In-Active"}</div>
      <div>
        Account Status:{" "}
        {isBalanceNegative
          ? "You have negative balance"
          : "You have positive balance"}
      </div>
      <button className="btn btn-info" onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Auth

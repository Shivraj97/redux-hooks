import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { applyMiddleware, createStore, compose } from "redux"
import { rootReducer } from "./reducers/combineReducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const myLogger = (state) => {
//   return (next) => {
//     return (action) => {
//       console.log("middleware!")
//       return next(action)
//     }
//   }
// }

// Implement your own cutom logging middleware in Redux
const myLogger = (state) => (next) => (action) => {
  console.log("state ->", state.getState())
  console.log("action ->", action)
  return next(action)
}

// const maxNegativeBalance = (state) => (next) => (action) => {
//   if (state.getState().banking.balance.accountBalance <= -10) {
//     console.log("Balance cannot be less than Rs10")
//   } else {
//     console.log("Balance is not less than Rs10")
//   }
//   return next(action)
// }

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(myLogger, thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

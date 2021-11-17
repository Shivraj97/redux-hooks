import "./App.css"
import Auth from "./components/Auth"
import Balance from "./components/Balance"
import Banking from "./components/Banking"
import AccountStatus from "./components/AccountStatus"
import Posts from "./components/Posts"

function App() {
  return (
    <div className="App">
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
      <Posts />
    </div>
  )
}

export default App

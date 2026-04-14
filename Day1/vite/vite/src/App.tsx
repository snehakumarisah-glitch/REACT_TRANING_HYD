import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Counter from "./components/Counter"
import LoginPage from "./pages/Login"
import ListProductsPage from "./pages/ListProducts"

function App() {

  return(
    <Router>
    <div className="container">
      <header>
        <AppBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element= {<Counter initCount={5}/>}/>
          <Route path="/products" element={<ListProductsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  )

  //return (
  // <div>
  //   <h3>React Vite Application</h3>
  //   <Message text="Hello React" color="blue"/>
  //   <Message text="Welcome to the training" color="green"/>
  //   <Counter initCount={5}/>
  //   <Counter initCount={15}/>
  // </div>
  //)
}

export default App

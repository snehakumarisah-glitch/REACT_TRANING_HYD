import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Counter from "./components/Counter"
import LoginPage from "./pages/Login"
import EditProduct from "./pages/EditProduct"
import ListProducts from "./pages/ListProducts"
import GadgetStore from "./pages/GadgetStore"
import ViewCart from "./pages/ViewCart"
import ProtectedRoute from "./components/ProtectedRoute"


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
          <Route path="/products" element={<ListProducts/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/products/:id" element={<ProtectedRoute><EditProduct/></ProtectedRoute>}/>
          <Route path="/gadgets" element={<GadgetStore/>}/>
          <Route path="/viewcart" element={<ViewCart/>}/>
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

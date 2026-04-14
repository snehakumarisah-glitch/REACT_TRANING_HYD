import { Link } from "react-router-dom"
function AppBar() {

    return(
    //<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link className="navbar-brand" to="#">React</Link>

    <ul className="nav">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
    </li>
    </ul>

    </div>
  )

//   return(
//     //<nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <nav className="navbar bg-dark border-bottom border-body">
//     <div className="container-fluid">
//     <a className="navbar-brand" href="#">React</a>

//     <ul className="nav">
//     <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">Active</a>
//     </li>
//     <li className="nav-item">
//         <a className="nav-link" href="/">Home</a>
//     </li>
//     <li className="nav-item">
//         <a className="nav-link" href="/products">Products</a>
//     </li>
//     <li className="nav-item">
//         <a className="nav-link"href="/login">Login</a>
//     </li>
//     </ul>

//     </div>
//     </nav>
//   )
}

export default AppBar

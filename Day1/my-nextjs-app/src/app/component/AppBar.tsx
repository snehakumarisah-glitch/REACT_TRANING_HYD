"use client"

import { useContext } from "react"
import  Link from "next/link";
import { AppThemeContext } from "../context/AppThemeContext"
function AppBar() {

    const themeContext = useContext(AppThemeContext);
    function switchTheme() {
        themeContext.changeMode(themeContext.mode === "dark" ? "light" : "dark");
        console.log("mode", themeContext.mode);
    }

    return(
    //<nav className="navbar navbar-expand-lg bg-body-tertiary">
    //<nav className="navbar navbar-light bg-light">
    <nav className={`navbar navbar-$(themeContext.mode) bg-${themeContext.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" href="#">React</Link>

    <ul className="nav">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li className="nav-item">
        <Link className="nav-link" href="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" href="/products">Products</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" href="/login">Login</Link>
    </li>
     <li className="nav-item">
        <Link className="nav-link" href="/gadgets">Gadget Store</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" href="/customers">Customer</Link>
    </li>
     <li className="nav-item">
        <Link className="nav-link" href="/viewcart">View Cart</Link>
    </li>
      <li className="nav-item">
        <Link className="nav-link" href="/supplier">Supplier</Link>
    </li>
     <li className="nav-item">
        <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
    </li>
    </ul>

    </div>
      </nav>
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

"use client"
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";

function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const router = useRouter();
  

    useEffect(()=> {
        console.log("login component mounted");
        usernameInputRef.current?.focus();

        return () => {
            console.log("login component unmounted");
        }

    },[]);

    async function login(e: MouseEvent<HTMLButtonElement>)  {
        e.preventDefault();
        
        //usernameInputRef.current.focus();
       // useTitle("Login");

        if(userName && password){
        try {
            const url = "http://localhost:9000/login";
            const response = await axios.post(url, {name: userName, password});
            console.log("success", response);
            setMessage("");

            dispatch({type: "login", payload: {
                isAuthenticated: true,
                userName,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            }});

            //navigate("/");
             router.push("/");
        } catch (error) {
            setMessage("Invalid username or password");
            dispatch({type: "logout"});
        }

        //VALIDATING 
        setMessage("");
        } else{
            setMessage('Enter the Credential');
        }
    }

    return(
        <div> 
             {message ? <div className="alert alert-warning">Enter the Credential</div> : null}
            <h3>Login</h3>
            <form>
                <div className="from-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" className="form-control" placeholder="UserName"
                    value={userName}
                    autoFocus
                    ref={usernameInputRef}
                    onChange={e=> setUserName(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"
                    onChange={e=> setPassword(e.target.value)}
                    autoFocus></input>
                    
                </div>
                <br />
                <button className="btn btn-success" onClick={login}> Login </button>
            </form>
        </div>
    ) 
}


export default LoginPage

import {useState, type MouseEvent, useRef, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(()=> {
        console.log("login component mounted");
        usernameInputRef.current.focus();

    },[]);

    async function login(e: MouseEvent<HTMLButtonElement>)  {
        e.preventDefault();
        
        usernameInputRef.current.focus();

        if(userName && password){
            //validate
            try {
                const url = "http://localhost:9000/login";
            
                const response = await axios.post(url,{
                                "name": userName,
                                "password": password
                            });
                console.log("response:", response);
                setMessage("");
                navigate("/");
            } catch(error) {
                console.log("failed:", error);
                setMessage("Invalid Credential");
            }

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
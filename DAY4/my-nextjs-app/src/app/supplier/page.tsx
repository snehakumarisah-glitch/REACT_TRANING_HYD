"use client"
import { useRef, useState } from "react";
import { sayHello } from "../action/sayHelloAction";

export default function SupplierPage(){

    const messageInputRef = useRef<HTMLInputElement>(null);
    const [messageResult, setMessageResult] = useState<string>("");
    async function handleClick() {
       const value = messageInputRef.current?.value;
         if(value) {
         const result = await sayHello(value);
         setMessageResult(result);
        }
    }
    return(
        <div>
            <h3> Supplier </h3>
            <div>
                <input ref={messageInputRef} className="form-control" type="text" placeholder="Search suppliers..."/>
            </div>
            <div>
                <button className="btn btn-info" type="button" onClick={handleClick}>Fetch message</button>
            </div> 
            <br/>
            <div>
                {messageResult}
            </div>  
           
        </div>
    )
}
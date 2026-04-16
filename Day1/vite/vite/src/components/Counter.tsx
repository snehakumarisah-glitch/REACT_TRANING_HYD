// <Counter initCount={5}/>

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type CounterProps = {
    initCount: number;
}
//function Counter(props: CounterProps){}

const Counter: React.FC<CounterProps> = ({initCount}) => {

    const [count, setCount] = useState(initCount);
     //let clickCount = 0;
    const clickCount = useRef(0); //mutableObject unlike state
   

    useEffect(()=> {
        console.log("count updated",count);
          },[count]);
          
    function increment(){
        console.log("inc involved");
        //initCount++;
        //setCount(count + 1);
        //setCount(count + 1);
        setCount((count) => count+1); //invoke the call back function // it rerendering the component 
        //clickCount++;
        clickCount.current++;

        console.log("clickCount", clickCount);
    }

    function decrement(){
        console.log("inc involved");
        //initCount--;
        //setCount(count - 1);
        setCount((count) => count-1); //invoke the call back
    }

     function handleChange(evnt: ChangeEvent<HTMLInputElement>){
        setCount(evnt.target.valueAsNumber);
    }

    return(
        <div>
            <h4>Count: {count}</h4>
            <div>
                <button onClick={increment}>++</button> &nbsp;
                <button onClick={decrement}>--</button>
                <div>
                    <input type="number"
                    placeholder="Count"
                    value={count}
                    onChange={handleChange}/>
                    
                </div>
            </div>
        </div>
    )
}
export default Counter;


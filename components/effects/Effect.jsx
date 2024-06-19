import { useState } from "react";

function Effect() {
    const [count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}></button>
            <p></p>
            <button onClick={() => {setCount1(count + 1)}}></button>
            <p></p>
        </div>
    );
}

export default Effect;
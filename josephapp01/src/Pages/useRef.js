import React, { useRef, useState } from 'react'

function UseRef() {
    const [StateExample, setStateExample] = useState(0)
    const RefExample = useRef(0);

    const changeRef =() => {
        RefExample.current = RefExample.current + 1;
        console.log(RefExample.current);

    }
    const changeState=() =>{
        setStateExample(StateExample + 1);
    }
    return (
        <div>
            <div>
            Ref Value: {RefExample.current}
            </div>
            <div>
                State: Value {StateExample}
            </div>
            <div>
                <button onClick={changeRef}>Add Ref</button>
                <button onClick={changeState}>Add State</button>
            </div>
        </div>
    )
}

export default UseRef
import React, { useContext } from 'react'
import { MainContext } from '../Pages/useContext'

function ContextChild2() {
    const darkTheme = useContext(MainContext);
    const themeStyle ={
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
    };

    return (
        <div className='card' style={themeStyle}> 
            <div className='card-body'>Child Component 2</div>
        </div>
    );
}
export default ContextChild2

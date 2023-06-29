import React, { createContext, useState } from 'react'
import ContextChild1 from '../components/ContextChild1';
import ContextChild2 from '../components/ContextChild2';
export const MainContext = createContext();

//Create parent 1
function ContextParent1() {
  return (
    <div className='card bg-light text-dark'>
      <div className='card-body'>
        Main Component 1
      </div>
      <div className='card-body'>
        <ContextChild1 />
      </div>
    </div>
  );
}

//Create parent 2
function ContextParent2() {
  return (
    <div className='card bg-light text-dark'>
      <div className='card-body'>
        Main Component 2
      </div>
      <div className='card-body'>
        <ContextChild2 />
      </div>
    </div>
  );
}

function UseContext() {
  //use usestate hook
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <MainContext.Provider value={darkTheme}>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h1>useContext Demo</h1>
            <button className='btn btn-primary mb-2' onClick={toggleTheme}>Button</button>
            <div className='card'>
              <div className='card-body bg-secondary text-white'>
                Container

                {/* call the parent components */}
                <div className='card-body'>
                  <ContextParent1 />
                  <ContextParent2 />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MainContext.Provider>
  )
}

export default UseContext
import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0) // State to hold the current number
  
  return ( 
    
    <div className="counter-box"> {/* Box for the counter app with gradient background */}
      
      <h1>Current number is {num}</h1> {/* Display the current number */}
      
      <button onClick={() => { setNum(num + 1) }}>Increase Number</button> {/* Button to increase the number */}
      
      <button onClick={() => { if (num > 0) setNum(num - 1) }}>Decrease Number</button> {/* Button to decrease the number */}
    
    </div> // End of the counter box
  )
}

export default App

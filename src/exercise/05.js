// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({style, className = '', ...otherProps}) => (
  <div
    className={`box ${className}`}
    style={{fontStyle: 'italic', ...style}}
    {...otherProps}
  />
)

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        small lightblue box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App

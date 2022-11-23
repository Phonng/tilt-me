import * as React from 'react'

import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
	const tiltRef = React.useRef(null)
	console.log(tiltRef);

	React.useEffect(() => {
    const {current: tiltNode} = tiltRef
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return () => tiltNode.vanillaTilt.destroy()
  }, [])
	
  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">tilt me</div>
    </Tilt>
  )
}

export default App
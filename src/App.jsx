import React, { useEffect } from "react"
import Home from "./components/page/Home"
import AnimatedCursor from "react-animated-cursor"

function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Home />
      <AnimatedCursor
        innerSize={18}
        outerSize={10}
        color='192, 126, 63'
        hasBlendMode={true}
        showSystemCursor={false}
        clickables={[
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "img",
        ]}
        outerStyle={{
          border: '1px solid var(--primary-color)',
        }}
        innerStyle={{
          border: '1px solid var(--primary-color)',
        }}
      />
    </>
  )
}

export default App

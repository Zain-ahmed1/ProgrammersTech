import React, { useEffect, useState } from "react"
import Home from "./components/page/Home"
import AnimatedCursor from "react-animated-cursor"

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const hideCursor = windowWidth >= 820;

  return (
    <>
      <Home />
      {hideCursor ? (
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
            ".proof"
          ]}
          outerStyle={{
            border: '1px solid var(--primary-color)',
          }}
          innerStyle={{
            border: '1px solid var(--primary-color)',
          }}
        />
      ) : null}
    </>
  )
}

export default App

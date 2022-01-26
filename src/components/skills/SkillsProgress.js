import React, { useEffect, useRef } from 'react';


const SkillsProgress = () => {

  const htmlRef = useRef()
  const bootstrapRef = useRef()
  const reactRef = useRef()
  const nodeRef = useRef()
  const gitRef = useRef()

    useEffect(() => {
        const timer1 = setTimeout(() => {
            htmlRef.current.style.width = "85%";
            bootstrapRef.current.style.width = "75%";
            reactRef.current.style.width = "75%";
            nodeRef.current.style.width = "50%";
            gitRef.current.style.width = "65%";
        }, 2000)
        return () => {
          clearTimeout(timer1)
        }
    }, [])

    return (
        <div className="skillsProgress">
            <div className="chart">
                <span> Html - Css - Sass </span>
                <footer>
                    <div id="html" data-width="85%" style={{backgroundColor: "#ff4848"}} ref={htmlRef} />
                </footer>
            </div>
          <div className="chart">
            <span> Bootstrap </span>
            <footer>
              <div id="bootstrap" data-width="75%" style={{backgroundColor: "#a440cc"}} ref={bootstrapRef} />
            </footer>
          </div>
          <div className="chart">
            <span> React.js </span>
            <footer>
              <div id="react" data-width="70%" style={{backgroundColor: "#00f7ff"}} ref={reactRef} />
            </footer>
          </div>
            <div className="chart">
                <span> Node.js - Express.js </span>
                <footer>
                    <div id="css" data-width="50%" style={{backgroundColor: "#317A0C"}} ref={nodeRef} />
                </footer>
            </div>
            <div className="chart">
                <span> GitHub - GitLab </span>
                <footer>
                    <div id="js" data-width="60%" style={{backgroundColor: "#ff6e40"}} ref={gitRef} />
                </footer>
            </div>
        </div>
    )
}

export default SkillsProgress;
import React from 'react';
import Typical from 'react-typical';

function AnimatedLine() {
    return (
        <div className="animatedLine">
            <p>I'm a computer</p>
            <Typical 
                loop={Infinity}
                wrapper="p"
                steps= {[
                    ' development student.', 
                    1000, 
                    ' enthusiast.', 
                    1000
                ]}
            />
        </div>
    );
}

export default AnimatedLine;
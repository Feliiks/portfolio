import React from 'react';

function NotFoundBox() {
    return (
        <div className="NotFoundBox">
            <img src={"./images/sad.svg"} alt="img" height="100px"/>
            <span>Oh no! You are lost.<br/>- Error 404 -</span>
        </div>
    );
}

export default NotFoundBox;
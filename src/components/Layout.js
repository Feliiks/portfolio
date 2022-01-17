import React from 'react';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="tags top"> 
                <p> Import React from 'react'; </p>
                <p> const {props.name} = () =&gt; &#123;</p> 
                <p style={{paddingLeft: '30px'}}> return ( </p>
            </div>
            <div className="tags bottom">
                <p style={{paddingLeft: '30px'}}> ); </p>
                <p> }; </p>
                <p> export default {props.name}; </p>
            </div>
        </div>
    );
};

export default Layout;
import React from 'react';
import { NavLink } from 'react-router-dom';


const WorkItem = (props) => {
    const {item} = props;
    return (
        <NavLink exact to={item.Name} > {/* {"/work/" + item.Name} target="_blank" */}
            <li className="workItem" style={{background: item.BgColor}}>
                <img className={item.isOnline ? '' : 'disabled-img'} src={item.Logo} alt={item.Name} />
                {item.isOnline ? "" : <div className="disabled"></div>}
                <div className={item.isOnline ? "thumb" : "disabled-thumb"}></div>
            </li>
        </NavLink>
    );
};

export default WorkItem;
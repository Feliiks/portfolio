import React from 'react';
import { NavLink } from 'react-router-dom';


const WorkItem = (props) => {
    const {item} = props;
    return (
        <NavLink exact to={`/work/${item.name}`}>
            <li className="workItem" style={{background: item.bgColor}}>
                <img className={item.isOnline ? '' : 'disabled-img'} src={item.logo} alt={item.name} />
                {item.isOnline ? "" : <div className="disabled" />}
                <div className={item.isOnline ? "thumb" : "disabled-thumb"} />
            </li>
        </NavLink>
    );
};

export default WorkItem;
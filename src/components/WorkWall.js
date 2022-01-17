import React from 'react';
import WorkItem from './WorkItem';

const WorkWall = () => {
    const items = [
        {
            "Name" : "lsvibes",
            "Logo" : "../images/lsvibes_logo.png",
            "BgColor" : "rgba(11, 11, 11, 1)",
            "isOnline" : true
        },
        {
            "Name" : "portfolio",
            "Logo" : "../images/img-logo.png",
            "BgColor" : "#181818",
            "isOnline" : true
        },
        {
            "Name" : "app-meteo",
            "Logo" : "../images/meteo_logo.svg",
            "BgColor" : "#fff",
            "url" : "https://www.google.com/",
            "isOnline" : true
        }
    ];

    return (
        <div className="workWall">
            <ul className="works-list">
                {items.map((item) => (
                    <WorkItem item={item} key={item.Name} />
                ))}
            </ul>
        </div>
    );
};

export default WorkWall;
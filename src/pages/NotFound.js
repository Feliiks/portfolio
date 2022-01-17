import React from 'react';
import Navigation from '../components/Navigation';
import NotFoundBox from '../components/NotFoundBox';

function NotFound() {
    return (
        <div className="notfound">
            <Navigation />
            <NotFoundBox />
        </div>
    );
};

export default NotFound;
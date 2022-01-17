import React from 'react';
import GameStop from '../components/GameStop';
import Navigation from '../components/Navigation';
import Preloader from '../components/Preloader';

function Game() {

    return (
        <div className="contact">
            <Navigation />
            <GameStop />
            <Preloader />
        </div>
    );
};

export default Game;
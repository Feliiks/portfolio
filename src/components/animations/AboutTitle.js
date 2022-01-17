import anime from "animejs";
import React, {useEffect} from "react";


export default function AboutTitle() {
    
    useEffect(() => {
        let blasts = document.querySelectorAll('.blast');

        setTimeout(() => {
            anime.timeline({loop: false})
            .add({
                targets: '.blast',
                opacity: [0, 1],
                scale: [.1, 1],
                translateZ: 0,
                duration: 1000,
                iterations: 1,
                delay: (el, i) => 75 * i
            });
        }, 2500)

        Array.from(blasts).forEach((blast, index) => {
            blast.addEventListener('mouseenter', () => {
                blast.animate([
                    { transform: 'scale(1, 1)' },
                    { transform: 'scale(.7, .7)' },
                    { transform: 'scale(1.3, 1.3)' },
                    { transform: 'scale(.8, .8)' },
                    { transform: 'scale(1.2, 1.2)' },
                    { transform: 'scale(.9, .9)' },
                    { transform: 'scale(1.1, 1.1)' },
                    { transform: 'scale(1, 1)' }
                ], {
                    duration: 800,
                    iterations: 1
                });
            });
        });
    })


    return (
        <div className="AboutTitle">
            <div className="text-content">
                <span className="blast">A</span>
                <span className="blast">b</span>
                <span className="blast">o</span>
                <span className="blast">u</span>
                <span className="blast">t</span>
                <span className="blast">&nbsp;</span>
                <span className="blast">m</span>
                <span className="blast">e</span>
                <span className="blast point">.</span>
            </div>
        </div>
    )
}
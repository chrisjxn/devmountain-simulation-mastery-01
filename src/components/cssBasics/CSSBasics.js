import React from 'react';
import './CSSBasics.css';

export default function CSSBasics() {
    return (
        // COMP 22C-4 - CSS ""
        <div className="cssBasicsComponent">
            <div>
                <div id="idExample">This div is styled using an id (font-weight, color, font-size)</div>
                {/* COMP 54C */}
                <div className="classExample">This div is styled using a class (background, margin, border, padding, width, text-align)</div>
                <span>Here I apply styling to a span element (position, right, top, width, height, padding, color, background, background-size)</span>
                <p>Here's a p element</p>
                <p>Here's a p element that gets some styling because it follows a p element (color, font-weight)
                    <div>And here's a div that gets some styling because it is contained within a p element</div>
                </p>
                <div className="container">
                    This is a container
                    <div className="floatRight">This container is floated to the right (float)</div>
                </div>
                <div>
                    <div className="flex">
                        <p className="flexElement">Flexbox!</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                        <p className="flexElement">element</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
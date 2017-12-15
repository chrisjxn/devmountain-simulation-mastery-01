import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="homeComponent">
            <div>This is the Home component</div>
            <div><Link to='/cssbasics'>CSS Basics</Link></div>
            <div><Link to='/html5basics'>HTML5 Basics</Link></div>
        </div>
    )
}

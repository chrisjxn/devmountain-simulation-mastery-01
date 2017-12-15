import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="homeComponent">
            <div>This is the Home component</div>
            <Link to='/cssbasics'>CSS Basics</Link>
        </div>
    )
}

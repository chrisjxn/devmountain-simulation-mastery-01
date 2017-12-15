import React from 'react';
import './HTML5Basics.css';

export default function HTML5Basics() {
    return (
        <div className="html5BasicsComponent">
            <section>
                <h1>This is the HTML5 Basics Component</h1>
                <input className="inputExample" autoFocus placeholder='This input gets autofocus' />
                <article>
                    <h2>Article 1</h2>
                    <p>Text for article 1 goes here</p>
                    <p>Here's a <a className="link" href='http://www.motogp.com'>link</a> to the MotoGP website</p>
                </article>
                <article>
                    <h2>Article 2</h2>
                    <p>Text for article 2 goes here</p>
                    <p>Here's a list:</p>
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                        <li>List item 4</li>
                    </ul>
                    <p>{`This image uses a self-closing <img /> tag`}</p>
                    <img className="zarcoImg" src={require('../../assets/zarco.jpg')} alt='Johann Zarco' />
                </article>
            </section>
            <section>
                <p>Here's a video</p>
                <video width="400" controls>
                    <source src={require('../../assets/walls.mp4')} type="video/mp4" />
                </video>
            </section>
            <section>
                <p>And here's an audio file <a className="link" href='https://www.youtube.com/watch?v=8YMtL0BLCW0'>(source)</a></p>
                <audio controls>
                    <source src={require('../../assets/NadiaKhristean.mp3')} type="audio/mpeg" />
                </audio>
            </section>
            <footer>Some info for a footer goes down here</footer>
        </div>
    )
}
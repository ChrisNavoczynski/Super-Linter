import React from 'react'
import './jasper.css'
import DOG from './dog.jpg'

export default function MyDog(props) {
    return (
        <div>
            <header className="header">
            <h1>Meet Jasper (Doodoohead)</h1>
            </header>
            <div className="describes">
            <p>
            <h2>He likes:</h2> 
            <li>bones</li> 
            <li>treats</li> 
            <li>head scratches</li>
            <li>walks in the park</li>
            </p>
            </div>
            <div className="dog"> 
            <img src={DOG} width="600" height="400"/>
            </div>
        </div>);
}
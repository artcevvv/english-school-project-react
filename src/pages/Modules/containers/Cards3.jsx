import React from "react";
import "./Cards.css";
import Card from "../components/Card";
import { word, correct, odd, sent } from "../../../Assets/exports";

const Cards3 = () => {
  return (
    <div className="app__cards-container section__padding">
      <div className="app__cards-container_grid-heading">3A</div>
      <div className="app__cards-container_grid">
        <Card 
            imageUrl={word} 
            title="Make up a word" 
            LinkTo="https://forms.gle/qhrW7BeVGkqsrHXj8" 
            difficulty="Easy" />
        <Card 
            imageUrl={sent} 
            title="Complete the sentence" 
            LinkTo="https://forms.gle/1f8VaBGPgUDN5B437" 
            difficulty="Medium" />
        <Card 
            imageUrl={correct} 
            title="Write in the correct word" 
            LinkTo="https://forms.gle/JRR2p1GFvF6NgnMb7" 
            difficulty="Hard" />
        </div>
        
        <div className="app__cards-container_grid-heading">3B</div>
        <div className="app__cards-container_grid">
            <Card 
                imageUrl={odd} 
                title="Choose the odd word" 
                LinkTo="https://forms.gle/5feQTwZHA9YWUqXu9" 
                difficulty="Easy" />
            <Card 
                imageUrl={correct} 
                title="Write in the correct word" 
                LinkTo="https://forms.gle/RFA218xESc9MnsT49" 
                difficulty="Medium" />
            <Card 
                imageUrl={correct} 
                title="Write in the correct word" 
                LinkTo="https://forms.gle/HnF6vNP5x5sgTpS7A" 
                difficulty="Hard" />
        </div>

        <div className="app__cards-container_grid-heading">3D</div>
        <div className="app__cards-container_grid">
            <Card 
                imageUrl={word} 
                title="Make up a word" 
                LinkTo="https://forms.gle/XCZa3WTz3EdjGz9ZA" 
                difficulty="Easy" />
            <Card 
                imageUrl={correct} 
                title="Write in the correct word" 
                LinkTo="https://forms.gle/gzvgJDJhpukqYpFh8" 
                difficulty="Hard" />
        </div>
      </div>    
  );
};

export default Cards3;

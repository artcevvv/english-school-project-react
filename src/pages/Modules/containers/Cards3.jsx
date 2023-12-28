import React from "react";
import "./Cards.css";
import Card from "../components/Card";
import aspect from "../../../Assets/aspect.jpg";

const Cards3 = () => {
  return (
    <div className="app__cards-container section__padding">
      <div className="app__cards-container_grid-heading">3A</div>
      <div className="app__cards-container_grid">
        <Card 
            imageUrl={aspect} 
            title="Make up a word or a phrase" 
            LinkTo="https://forms.gle/qhrW7BeVGkqsrHXj8" 
            difficulty="Easy" />
        <Card 
            imageUrl={aspect} 
            title="Complete the sentence with the correct word" 
            LinkTo="https://forms.gle/1f8VaBGPgUDN5B437" 
            difficulty="Medium" />
        <Card 
            imageUrl={aspect} 
            title="Write in the correct word" 
            LinkTo="https://forms.gle/JRR2p1GFvF6NgnMb7" 
            difficulty="Hard" />
        </div>
        
        <div className="app__cards-container_grid-heading">3B</div>
        <div className="app__cards-container_grid">
            <Card 
                imageUrl={aspect} 
                title="Choose the odd word out" 
                LinkTo="https://forms.gle/5feQTwZHA9YWUqXu9" 
                difficulty="Easy" />
            <Card 
                imageUrl={aspect} 
                title="Write the correct words" 
                LinkTo="https://forms.gle/RFA218xESc9MnsT49" 
                difficulty="Medium" />
            <Card 
                imageUrl={aspect} 
                title="Write in the correct word" 
                LinkTo="https://forms.gle/HnF6vNP5x5sgTpS7A" 
                difficulty="Hard" />
        </div>

        <div className="app__cards-container_grid-heading">3D</div>
        <div className="app__cards-container_grid">
            <Card 
                imageUrl={aspect} 
                title="Make up a word or a phrase" 
                LinkTo="https://forms.gle/XCZa3WTz3EdjGz9ZA" 
                difficulty="Easy" />
            <Card 
                imageUrl={aspect} 
                title="Write in the correct word" 
                LinkTo="https://forms.gle/gzvgJDJhpukqYpFh8" 
                difficulty="Hard" />
        </div>
      </div>    
  );
};

export default Cards3;

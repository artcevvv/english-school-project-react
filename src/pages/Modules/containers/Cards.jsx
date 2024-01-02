import React from "react";
import "./Cards.css";
import Card from "../components/Card";
import { word, correct, sent } from "../../../Assets/exports";

const Cards = () => {
  return (
    <div className="app__cards-container section__padding">
      <div className="app__cards-container_grid-heading">Introduction</div>
      <div className="app__cards-container_grid">
        
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/R1GP6cyfN1hkrYBK8"
          difficulty="Easy"
        />
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/vFCPmZcK26jr6b5e6"
          difficulty="Medium"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/9BNBFRoXkQUfBQFf8"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">1A</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/SpD9nePdBnpGMLSi9"
          difficulty="Easy"
        />
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/a8J6hMBJo8jKCrZB9"
          difficulty="Medium"
        />
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/B6ZAb6RY2HdWS4QHA"
          difficulty="Medium"
        />
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/e2pgVBfYyEfME4jH7"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">1B</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/FZHejmPmg8gKPVFH8"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/kd9FU9ffVZTkpCyx9"
          difficulty="Medium"
        />
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/6sFo9zPbLHT4G3DE7"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">1D</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/Y1B7WwEewgyBcY428"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/kv2CUZ7g9prAHG53A"
          difficulty="Medium"
        />
      </div>
      <div className="app__cards-container_grid-heading">CLIL</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/wdo5q74iw78aA4jY6"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/pJJLboQi6MRMk9wU9"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">1D</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/Y1B7WwEewgyBcY428"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/kv2CUZ7g9prAHG53A"
          difficulty="Medium"
        />
      </div>
      <div className="app__cards-container_grid-heading">Culture Spot 1</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/z3RwXokWa8bfHJNQ9"
          difficulty="Easy"
        />
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/Y3Aba9bVjgUBpdzX6"
          difficulty="Easy"
        />
      </div>
      </div>
  );
};

export default Cards;

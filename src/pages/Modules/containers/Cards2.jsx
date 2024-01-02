import React from "react";
import "./Cards.css";
import Card from "../components/Card";
import { word, correct, pict, sent } from "../../../Assets/exports";

const Cards2 = () => {
  return (
    <div className="app__cards-container section__padding">
      <div className="app__cards-container_grid-heading">Introduction</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/Zsm1au8k5KJYhAqi8"
          difficulty="Easy"/>

        <Card
          imageUrl={pict}
          title="Match the pictures with words"
          LinkTo="https://forms.gle/R6c4tJwYh5ErSh4VA"
          difficulty="Easy"/>
      </div>
      
      <div className="app__cards-container_grid-heading">2A</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/A18P8F7njUUA2xFZ7"
          difficulty="Easy"
        />

        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/fqbJSPSbRsK2x9q77"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">2B</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={word}
          title="Make up a word"
          LinkTo="https://forms.gle/QuW6n2a6iU9oTGJU6"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/TST1jg5nv8sTHCuf9"
          difficulty="Hard"
        />
      </div>
      <div className="app__cards-container_grid-heading">2D</div>
      <div className="app__cards-container_grid">
        <Card
          imageUrl={sent}
          title="Complete the sentence"
          LinkTo="https://forms.gle/L2N1gihT5yAhvT2S9"
          difficulty="Easy"
        />
        <Card
          imageUrl={correct}
          title="Write in the correct word"
          LinkTo="https://forms.gle/Lt2YHs4QeKnLehY47"
          difficulty="Hard"
        />
      </div>
    </div>
  );
};

export default Cards2;

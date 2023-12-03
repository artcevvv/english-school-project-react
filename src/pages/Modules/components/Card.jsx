import React from "react";
import "./Card.css"; // Import your CSS file for styling

const Card = ({ imageUrl, title, LinkTo, difficulty }) => {
  return (
    <div className="app__card">
      <div
        className="app__card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="app__card-content">
        <h2 className="app__card-title">{title}</h2>
        <h3
          difficulty
          className="app__card-difficulty"
          style={{
            color:
              difficulty === "Easy"
                ? "green"
                : difficulty === "Medium"
                ? "orange"
                : "red",
          }}
        >
          {difficulty}
        </h3>
        <button className="app__card-button shadow-drop-center scale-up-center">
          <a href={LinkTo}>Go To</a>
        </button>
      </div>
    </div>
  );
};

export default Card;

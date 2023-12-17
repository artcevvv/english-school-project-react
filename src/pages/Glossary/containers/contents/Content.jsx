import React, { useState } from "react";
import "./Content.css";
import { Words1, Words2, Words3, Words4 } from "../../components/exports";

const Content = () => {
  const [Module1, setModule1] = useState(true);
  const [Module2, setModule2] = useState(false);
  const [Module3, setModule3] = useState(false);
  const [Module4, setModule4] = useState(false);

  const Module1Handler = () => {
    setModule1(true);
    setModule2(false);
    setModule3(false);
    setModule4(false);
  };

  const Module2Handler = () => {
    setModule1(false);
    setModule2(true);
    setModule3(false);
    setModule4(false);
  };

  const Module3Handler = () => {
    setModule1(false);
    setModule2(false);
    setModule3(true);
    setModule4(false);
  };

  const Module4Handler = () => {
    setModule1(false);
    setModule2(false);
    setModule3(false);
    setModule4(true);
  };

  return (
    <div className="glossary__content-container">
      <div className="glossary__content-btns">
        <div className="glossary__content-btn" onClick={Module1Handler}>
          Module 1
        </div>
        <div className="glossary__content-btn" onClick={Module2Handler}>
          Module 2
        </div>
        <div className="glossary__content-btn" onClick={Module3Handler}>
          Module 3
        </div>
        <div className="glossary__content-btn" onClick={Module4Handler}>
          Module 4
        </div>
      </div>

      <div className="glossary__content-container_section">
        {Module1 && <Words1 />}
        {Module2 && <Words2 />}
        {Module3 && <Words3 />}
        {Module4 && <Words4 />}
      </div>
    </div>
  );
};

export default Content;

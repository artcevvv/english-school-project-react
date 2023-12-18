import React, { useState } from "react";
import "./Words1.css";

const Words1 = () => {
  const [Intro, setIntro] = useState(true);
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [D, setD] = useState(false);
  const [E, setE] = useState(false);
  const [CLIL1, setCLIL1] = useState(false);
  const [Culture1, setCulture1] = useState(false);

  const IntroHandler = () => {
    setIntro(true);
    setA(false);
    setB(false);
    setD(false);
    setE(false);
    setCLIL1(false);
    setCulture1(false);
  };
  const AHandler = () => {
    setIntro(false);
    setA(true);
    setB(false);
    setD(false);
    setE(false);
    setCLIL1(false);
    setCulture1(false);
  };
  const BHandler = () => {
    setIntro(false);
    setA(false);
    setB(true);
    setD(false);
    setE(false);
    setCLIL1(false);
    setCulture1(false);
  };
  const DHandler = () => {
    setIntro(false);
    setA(false);
    setB(false);
    setD(true);
    setE(false);
    setCLIL1(false);
    setCulture1(false);
  };
  const EHandler = () => {
    setIntro(false);
    setA(false);
    setB(false);
    setD(false);
    setE(true);
    setCLIL1(false);
    setCulture1(false);
  };
  const CLIL1Handler = () => {
    setIntro(false);
    setA(false);
    setB(false);
    setD(false);
    setE(false);
    setCLIL1(true);
    setCulture1(false);
  };
  const Culture1Handler = () => {
    setIntro(false);
    setA(false);
    setB(false);
    setD(false);
    setE(false);
    setCLIL1(false);
    setCulture1(true);
  };

  return (
    <div className="glossary__words-container section__padding">
      <div className="glossary__words-heading">
        <h1>Legend or Truth</h1>
      </div>
      <div className="glossary__words-section">
        <div className="glossary__words-section_names">
          <div className="glossary__words-section_name" onClick={IntroHandler}>
            Introduction
          </div>
          <div className="glossary__words-section_name" onClick={AHandler}>
            1A
          </div>
          <div className="glossary__words-section_name" onClick={BHandler}>
            1B
          </div>
          <div className="glossary__words-section_name" onClick={DHandler}>
            1D
          </div>
          <div className="glossary__words-section_name" onClick={EHandler}>
            1E
          </div>
          <div className="glossary__words-section_name" onClick={CLIL1Handler}>
            CLIL1
          </div>
          <div
            className="glossary__words-section_name"
            onClick={Culture1Handler}
          >
            Culture corner
          </div>
        </div>

        {Intro && (
          <div className="glossary__words-section_content">
            <p>
              Attack- To aggressively and intentionally engage in harmful
              actions or behavior towards someone or something, often with the
              intent to cause injury, damage, or destruction.
            </p>
            <p>
              Bite Off- To sever or detach something, typically with the teeth
              or by using a strong, sudden force.
            </p>
            <p>
              Get Lost- An informal and often impolite way of telling someone to
              go away or leave a particular place. It can also be used
              figuratively to express frustration or annoyance with someone.
            </p>
            <p>
              Hit- To make forceful contact with something, typically with a
              striking motion, often resulting in impact or physical injury.
            </p>
            <p>
              Inspire- To motivate, encourage, or stimulate someone to do
              something creative, productive, or positive. It often involves
              igniting a feeling of enthusiasm or admiration.
            </p>
          </div>
        )}

        {A && (
          <div className="glossary__words-section_content">
            <p>
              Camp- A place where people, especially travelers or vacationers,
              set up temporary shelters like tents or cabins, typically in a
              natural or outdoor setting.
            </p>
            <p>
              Clue- A piece of information or evidence that helps to solve a
              mystery, puzzle, or problem by providing direction or insight.
            </p>
            <p>
              Conquer- To overcome or defeat something or someone, often through
              force, strategy, or determination, and gain control or mastery
              over it.
            </p>
            <p>
              Equipment- Tools, machinery, gear, or other items needed for a
              specific task, activity, or purpose.
            </p>
            <p>
              Expedition- A journey, often organized and planned in advance,
              undertaken for a particular purpose, such as exploration,
              research, or adventure.
            </p>
            <p>
              Fail- To not succeed in achieving a goal or desired outcome; to
              experience a lack of success or accomplishment.
            </p>
            <p>
              Feat- An impressive and notable accomplishment or achievement that
              often requires skill, courage, or strength.
            </p>
            <p>
              Fight- To engage in physical combat or conflict with someone or
              something, typically in an attempt to defend oneself or achieve a
              goal.
            </p>
            <p>
              Frozen- In a solid state due to extremely low temperatures,
              characterized by the transformation of a liquid into a solid.
            </p>
            <p>
              Goal- A specific objective or target that one aims to achieve,
              often used to guide efforts and actions towards a desired outcome.
            </p>
            <p>
              Log Book- A record-keeping book or journal where events,
              activities, or data are systematically recorded, often used in
              various contexts such as navigation, science, or travel.
            </p>
            <p>
              Make It- To succeed or achieve a desired result or goal, often
              used informally to express accomplishment.
            </p>
            <p>
              Mountain Range- A series of connected mountains or hills arranged
              in a line or chain.
            </p>
            <p>
              Mountaineer- A person who engages in the activity of climbing
              mountains, often skilled in mountain climbing techniques and
              well-versed in outdoor survival.
            </p>
            <p>
              Numb- Devoid of physical sensation or the ability to feel; lacking
              sensitivity or responsiveness.
            </p>
            <p>
              Set Out- To begin a journey, task, or mission with a specific
              destination or objective in mind.
            </p>
            <p>
              Spot- A particular place or location, often a specific area within
              a larger area.
            </p>
            <p>
              Summit- The highest point or peak of a mountain or hill.
              Figuratively, it can refer to the highest achievement or level of
              attainment.
            </p>
            <p>
              Surround- To encircle or encompass something, often by being on
              all sides of it.
            </p>
            <p>
              Thick- Having a relatively great distance between opposite sides
              or surfaces; not thin.
            </p>
            <p>
              Vital- Absolutely necessary or essential for the existence,
              success, or well-being of something or someone.
            </p>
            <p>
              Wild- In a natural state, not domesticated or cultivated by
              humans; untamed or free-roaming. It can also refer to something
              that is uncontrolled or unrestrained.
            </p>{" "}
          </div>
        )}

        {B && (
          <div className="glossary__words-section_content">
            <p>
              Afraid- Experiencing fear or apprehension; feeling scared or
              anxious about something.
            </p>

            <p>
              Ashamed- Feeling a sense of guilt, embarrassment, or disgrace as a
              result of one's actions or circumstances.
            </p>

            <p>
              Awful- Extremely bad, unpleasant, or of poor quality; inspiring a
              strong sense of dislike or disgust.
            </p>

            <p>
              Blizzard- A severe and prolonged snowstorm characterized by strong
              winds, low visibility, and heavy snowfall.
            </p>

            <p>
              Bored- Feeling uninterested, unengaged, or lacking in excitement
              or stimulation; experiencing a sense of tedium or restlessness.
            </p>

            <p>
              Drought- A prolonged period of abnormally low rainfall or moisture
              levels in a specific region, leading to water shortages and
              adverse environmental effects.
            </p>

            <p>
              Flood- An overflow of water that submerges usually dry land, often
              caused by heavy rainfall, melting snow, or the breaching of
              riverbanks.
            </p>

            <p>
              Furious- Extremely angry, enraged, or filled with intense and
              uncontrollable anger.
            </p>

            <p>
              Heatwave- A prolonged period of excessively hot weather, typically
              with high temperatures well above the seasonal average.
            </p>

            <p>
              Hurricane- A powerful and destructive storm characterized by
              strong winds, heavy rainfall, and a well-defined center, known as
              the eye.
            </p>

            <p>
              Lonely- Feeling isolated or lacking companionship; experiencing a
              sense of solitude or social disconnection.
            </p>

            <p>
              Lucky- Fortunate or having good luck; experiencing favorable
              outcomes or circumstances.
            </p>

            <p>
              Overflow- To spill over or exceed the limits of a container or
              space.
            </p>

            <p>
              Relieved- Experiencing a sense of relief, which is a feeling of
              comfort or reassurance after a stressful or difficult situation.
            </p>

            <p>
              Scared- Feeling fear or being frightened; experiencing a state of
              anxiety or apprehension.
            </p>

            <p>
              Thunderstorm- A weather phenomenon characterized by the occurrence
              of thunder and lightning, often accompanied by heavy rainfall and
              strong winds.
            </p>

            <p>
              Tired- Physically or mentally exhausted; lacking energy or feeling
              fatigued as a result of physical or mental exertion.
            </p>

            <p>
              Tornado- A violent and destructive rotating column of air, often
              extending from a thunderstorm to the ground, characterized by high
              winds that can cause extensive damage and create a funnel-shaped
              cloud.
            </p>

            <p>
              Worried- Anxious or concerned about something, often accompanied
              by feelings of unease or fear regarding potential problems or
              uncertainties.
            </p>
          </div>
        )}

        {D && (
          <div className="glossary__words-section_content">
            <p>
              Battle- A conflict or fight between individuals, groups, or
              armies, often involving armed combat or intense competition.
            </p>

            <p>
              Bravery- The quality or state of being courageous, fearless, or
              willing to face danger, adversity, or challenges.
            </p>

            <p>
              Hero- A person who is admired for their exceptional courage, noble
              qualities, or outstanding achievements, often in the face of
              adversity or danger.
            </p>

            <p>
              Nomad- A person or group of people who have no permanent home and
              move from place to place, typically in search of food, water, or
              grazing land.
            </p>

            <p>
              Peacemaker- Someone who actively seeks to resolve conflicts or
              disputes and promote peace and harmony among individuals or
              groups.
            </p>

            <p>
              Politician- A person who is involved in the practice of politics,
              typically as an elected or appointed official, and who makes
              decisions on behalf of a government or community.
            </p>

            <p>
              Put Off- To delay or postpone an event, task, or activity to a
              later time or date.
            </p>

            <p>
              Put On- To dress oneself in clothing or accessories, or to stage a
              performance or act in a particular manner.
            </p>

            <p>
              Put Up- To erect or assemble something, such as a structure or a
              poster, often for a specific purpose.
            </p>

            <p>
              Put Up With- To tolerate or endure a difficult or unpleasant
              situation, person, or behavior without complaining or protesting.
            </p>

            <p>
              Role- A part or character that an individual plays in a particular
              situation, job, or performance.
            </p>

            <p>
              Spacious- Having a lot of space or room; open and roomy in design
              or layout.
            </p>

            <p>
              Steppe- A vast, flat, and often treeless grassland region,
              typically found in the interior of a continent, such as the
              Eurasian steppes.
            </p>

            <p>
              Victory- The act of defeating an opponent or achieving success in
              a competition, conflict, or challenge.
            </p>

            <p>
              Warrior- A skilled and often trained combatant or fighter,
              particularly one who engages in warfare or battle.
            </p>
          </div>
        )}

        {E && (
          <div className="glossary__words-section_content">
            <p>
              Flame- The visible, hot, and often brightly colored gas and
              particles produced by the combustion of a substance, such as wood
              or gas.
            </p>

            <p>
              Pond- A small, shallow body of water, often found in natural
              settings such as parks, gardens, or the countryside.
            </p>

            <p>
              Rescue Worker- A person who is trained and employed to provide
              assistance and rescue in emergency situations, such as
              firefighters, paramedics, or search and rescue personnel.
            </p>

            <p>
              There Is No Escape- A statement indicating that there is no way to
              avoid or evade a particular situation or outcome.
            </p>
          </div>
        )}

        {CLIL1 && (
          <div className="glossary__words-section_content">
            <p>
              Bury My Head in Hands- An expression of despair or distress, often
              used when someone is overwhelmed by a difficult or painful
              situation and covers their face with their hands.
            </p>

            <p>
              Canned Goods- Food items that are preserved and sealed in airtight
              containers, typically cans, to extend their shelf life.
            </p>

            <p>
              Cruel- Willfully causing suffering or harm to others, often for
              one's own satisfaction or without regard for their well-being.
            </p>

            <p>
              Deck- A flat, horizontal surface, often on a ship or the exterior
              of a building, used for various purposes, including walking,
              lounging, or playing.
            </p>

            <p>
              Fade Away- To gradually disappear or become less noticeable over
              time, often used to describe the diminishing of something's
              intensity or visibility.
            </p>

            <p>
              Heart Beating- Refers to the rhythmic pulsation of the heart,
              which is a vital organ responsible for pumping blood throughout
              the body.
            </p>

            <p>
              Lie Flat- To recline or stretch out horizontally, typically in a
              flat position.
            </p>

            <p>
              Lower- To move or bring something down to a lower position or
              level.
            </p>

            <p>
              Oilskin- A type of waterproof clothing or fabric that is treated
              with oil to repel water.
            </p>

            <p>
              Row- A linear arrangement of objects, often in a straight line or
              sequence.
            </p>

            <p>
              Sink- To descend or drop downward, typically into a body of water
              or a depression.
            </p>

            <p>
              Supplies- Materials, resources, or provisions needed for a
              specific purpose or to sustain life, such as food, water, and
              equipment.
            </p>

            <p>
              Trap-Door- A hinged or movable door, often set into the floor or
              ceiling, that can be opened or closed to provide access to a space
              below or above.
            </p>

            <p>
              Yawn- To involuntarily open one's mouth wide and inhale deeply,
              often as a sign of tiredness, boredom, or drowsiness.
            </p>
          </div>
        )}

        {Culture1 && (
          <div className="glossary__words-section_content">
            <p>
              Cannibal- A person or creature that consumes the flesh of its own
              kind.
            </p>

            <p>
              Eventually- At some point in the future; after a period of time or
              a sequence of events.
            </p>

            <p>
              Loyal- Faithful and devoted to a person, group, cause, or
              principle; showing unwavering support and allegiance.
            </p>

            <p>
              Merchant- A person or business involved in buying and selling
              goods or commodities, often on a commercial scale.
            </p>

            <p>
              Native- Belonging to a particular place by birth or origin;
              indigenous to a specific region or country.
            </p>

            <p>
              Prosperous- Having success, wealth, or well-being; characterized
              by financial or material abundance and good fortune.
            </p>

            <p>
              Servant- A person who is employed to perform domestic or menial
              tasks for someone else, often in a household or as a personal
              assistant.
            </p>

            <p>
              Shelter- A place or structure that provides protection and refuge
              from the elements or from danger.
            </p>

            <p>
              Struggle- A strenuous effort or fight, often against difficulties,
              obstacles, or opposition.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words1;

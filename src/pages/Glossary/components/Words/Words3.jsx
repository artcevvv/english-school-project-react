import React, { useState } from "react";
import "./Words.css";

const Words3 = () => {
  const [A, setA] = useState(true);
  const [B, setB] = useState(false);
  const [D, setD] = useState(false);
  const [E, setE] = useState(false);

  const AHandler = () => {
    setA(true);
    setB(false);
    setD(false);
    setE(false);
  };
  const BHandler = () => {
    setA(false);
    setB(true);
    setD(false);
    setE(false);
  };
  const DHandler = () => {
    setA(false);
    setB(false);
    setD(true);
    setE(false);
  };
  const EHandler = () => {
    setA(false);
    setB(false);
    setD(false);
    setE(true);
  };
  return (
    <div className="glossary__words-container section__padding">
      <div className="glossary__words-heading">
        <h1>Virtual Reality</h1>
      </div>
      <div className="glossary__words-section">
        <div className="glossary__words-section_names">
          <div className="glossary__words-section_name" onClick={AHandler}>
            3A
          </div>
          <div className="glossary__words-section_name" onClick={BHandler}>
            3B
          </div>
          <div className="glossary__words-section_name" onClick={DHandler}>
            3D
          </div>
          <div className="glossary__words-section_name" onClick={EHandler}>
            3E
          </div>
        </div>
        {A && (
          <div className="glossary__words-section_content">
            <p>
              A Leap Forward- A significant and sudden progress or improvement
              in a particular area, often implying a positive and innovative
              development.
            </p>

            <p>
              Advance- A forward movement or progress, especially in knowledge,
              technology, or a specific field.
            </p>

            <p>
              Affordable- Priced reasonably and within the financial means of
              the average person or a specific target group.
            </p>

            <p>
              Brain Surgery- Medical procedures involving the manipulation or
              alteration of the brain, typically for the purpose of treating
              neurological disorders or injuries.
            </p>

            <p>
              Digital Revolution- A profound and rapid transformation in various
              aspects of society, industry, and culture, driven by the
              widespread adoption and integration of digital technologies.
            </p>

            <p>
              Endless- Having no limits, boundaries, or restrictions; infinite
              or immeasurable.
            </p>

            <p>
              Experience- The knowledge, skills, and impressions acquired
              through personal involvement, observation, or participation in
              various activities or events.
            </p>

            <p>
              Gaming Industry- The collective businesses, organizations, and
              activities involved in the creation, development, production, and
              distribution of video games.
            </p>

            <p>
              Graduate- A person who has successfully completed a course of
              study or training, typically at a college or university, and has
              been awarded a degree or diploma.
            </p>

            <p>Massive- Extremely large in size, quantity, or extent.</p>

            <p>
              Nobleman- A man of noble birth or high social rank, often with
              inherited titles or privileges.
            </p>

            <p>
              Peasant- A member of a class of agricultural laborers, typically
              working in subsistence farming and often having low social and
              economic status.
            </p>

            <p>
              Recreate- To create or produce something again, or to engage in
              activities that provide relaxation or entertainment, often as a
              means of refreshment or rejuvenation.
            </p>

            <p>
              Transform- To undergo a thorough and significant change in form,
              appearance, or character.
            </p>

            <p>
              Virtual Reality- A computer-generated simulation of an environment
              that can be interacted with in a seemingly real or physical way,
              typically through the use of electronic equipment such as VR
              headsets.
            </p>
          </div>
        )}
        {B && (
          <div className="glossary__words-section_content">
            <p>
              Anchor- A heavy device, typically made of metal, attached to a
              rope or chain and used to moor a ship to the sea bottom to prevent
              drifting.
            </p>

            <p>
              Attend- To be present at an event, gathering, or place; to pay
              attention to or take care of something or someone.
            </p>

            <p>
              Belongings- Personal possessions or property owned by an
              individual; things that one owns.
            </p>

            <p>
              Bitter- Having a sharp, acrid taste; exhibiting resentment or
              intense hostility.
            </p>

            <p>
              Brakes- Mechanical devices used to slow down or stop the movement
              of a vehicle or machine.
            </p>

            <p>
              Cabin- A small, enclosed space, often on a ship or aircraft, used
              for shelter or living quarters.
            </p>

            <p>
              Carriage- A vehicle with wheels, typically pulled by horses or a
              motorized vehicle, used for transportation.
            </p>

            <p>
              Cockpit- The compartment in an aircraft or spacecraft where the
              pilot and crew operate the controls.
            </p>

            <p>
              Crew- A group of people working together as a team, especially on
              a ship, aircraft, or in a performance.
            </p>

            <p>
              Dashboard- The control panel in a vehicle, usually in front of the
              driver, displaying information and controls for operating the
              vehicle.
            </p>

            <p>
              Deck- The floor-like surface of a ship, usually at the same level
              as the main living or working area.
            </p>

            <p>
              Engine- A machine designed to convert energy into mechanical
              motion, often used to power vehicles, machines, or generators.
            </p>

            <p>
              Exhaust Pipe- A pipe through which waste gases, typically from an
              engine, are expelled.
            </p>

            <p>
              Fasten- To secure or close something firmly, often with a buckle,
              button, or other form of attachment.
            </p>

            <p>
              Handlebars- The steering mechanism on a bicycle or motorcycle,
              consisting of a horizontal bar with handgrips at the ends.
            </p>

            <p>
              Harbour- A place on the coast where ships can seek shelter, load
              and unload goods, or be stationed.
            </p>

            <p>
              Headlights- Front lights on a vehicle, typically used to
              illuminate the road ahead during low-light conditions.
            </p>

            <p>
              Heavy Meal- A substantial and filling meal, often rich in calories
              and nutrients.
            </p>

            <p>
              Licence Plate- A metal plate attached to a vehicle, bearing a
              unique alphanumeric code, used for identification purposes.
            </p>

            <p>
              Mast- A tall vertical pole or spar on a ship or boat, typically
              used to support sails or rigging.
            </p>

            <p>
              Mirror- A reflective surface, typically glass coated with a metal
              amalgam, that reflects a clear image of objects placed in front of
              it.
            </p>

            <p>
              On Board- Present or included as part of a vehicle, vessel, or
              aircraft; currently participating or involved.
            </p>

            <p>
              Overhead Compartment- A storage space located above passenger
              seating in vehicles or aircraft, typically used for stowing
              carry-on luggage.
            </p>

            <p>
              Pedal- A lever operated by foot, such as those in a car for
              controlling the accelerator, brake, or clutch.
            </p>

            <p>
              Platform- A raised level surface, often a floor or stage, used as
              a foundation for various activities, such as boarding a train or
              making a public speech.
            </p>

            <p>
              Port- A place on the coast or a navigable waterway where ships
              load and unload cargo, usually equipped with facilities for
              customs and other services.
            </p>

            <p>
              Rail- A bar or series of bars, typically made of metal, forming a
              track along which vehicles, such as trains or trams, can move.
            </p>

            <p>
              Rear Light- A light located at the back of a vehicle, typically
              used to signal braking or indicate the presence of the vehicle to
              other road users.
            </p>

            <p>Saddle- A seat for a rider on the back of a horse or bicycle.</p>

            <p>
              Seatbelt- A safety belt or harness designed to secure a person in
              a vehicle or aircraft to prevent or reduce injury during a
              collision.
            </p>

            <p>
              Secure- To fasten, lock, or make something safe and stable; free
              from danger or threat.
            </p>

            <p>
              Soft Drink- A non-alcoholic beverage, often carbonated, and
              typically sweetened, such as soda or fruit-flavored drinks.
            </p>

            <p>
              Sour- Having a sharp, tangy taste; the flavor sensation associated
              with acidic substances.
            </p>

            <p>
              Steering Wheel- A wheel-shaped device in a vehicle, connected to
              the steering mechanism, allowing the driver to control the
              direction of the vehicle.
            </p>

            <p>
              Tyre- The outer rubber covering of a wheel, often inflated with
              air, used for vehicles such as cars, bicycles, and motorcycles.
            </p>

            <p>
              Wheel- A circular device that rotates on an axle and is used to
              facilitate movement or transportation.
            </p>

            <p>
              Windscreen- The front window of a vehicle, aircraft, or other
              enclosed structure.
            </p>

            <p>
              Wing- A movable airfoil attached to an aircraft's fuselage,
              providing lift and control during flight.
            </p>
          </div>
        )}
        {D && (
          <div className="glossary__words-section_content">
            <p>
              Appeal- The quality of being attractive, interesting, or engaging;
              the power to evoke positive interest or emotion.
            </p>

            <p>
              Book Report- A written or oral summary and analysis of a book,
              often prepared as an assignment for academic or personal review
              purposes.
            </p>

            <p>
              Bookworm- A person who enjoys reading books and spends a
              significant amount of time engaged in reading.
            </p>

            <p>
              Capture- To take someone or something into custody or control; to
              record or represent visually or artistically.
            </p>

            <p>
              Claim Back- To demand the return or restoration of something that
              is considered one's own, typically due to a right or previous
              possession.
            </p>

            <p>
              Decline- To refuse or reject; to decrease or diminish in quantity,
              quality, or importance.
            </p>

            <p>
              Embark On- To start or undertake a journey, project, or course of
              action.
            </p>

            <p>
              Fictional- Relating to or characteristic of fiction; not based on
              real events or people.
            </p>

            <p>
              Highly Entertaining- Providing a great deal of enjoyment,
              amusement, or pleasure.
            </p>

            <p>
              Hobbit- A fictional race of small human-like creatures created by
              J.R.R. Tolkien, featured prominently in "The Hobbit" and "The Lord
              of the Rings" series.
            </p>

            <p>
              Life-Saver- Something or someone that provides crucial help or
              support in a difficult or life-threatening situation.
            </p>

            <p>
              Prequel- A literary, cinematic, or dramatic work that precedes and
              is based on an earlier work, often providing background or
              context.
            </p>

            <p>
              Protagonist- The central character or leading figure in a story,
              often with whom the audience sympathizes or identifies.
            </p>

            <p>
              Reluctantly- With hesitation or unwillingness; doing something
              with reluctance or a lack of enthusiasm.
            </p>

            <p>
              Sequel- A literary, cinematic, or dramatic work that continues the
              story of a previous work, picking up where it left off or
              exploring further developments.
            </p>

            <p>
              Skilfully- With skill or expertise; demonstrating proficiency and
              competence in a particular activity or task.
            </p>

            <p>
              Trick- A clever or deceptive action or device intended to achieve
              a specific result, often through deceit or illusion.
            </p>
          </div>
        )}
        {E && (
          <div className="glossary__words-section_content">
            <p>
              Adventure- An exciting or daring experience, often involving risk
              and the exploration of unknown or thrilling situations.
            </p>

            <p>
              Biography- A written account of a person's life, typically
              focusing on factual details, achievements, and experiences.
            </p>

            <p>
              Celestial- Relating to the sky or the heavens; pertaining to
              celestial bodies such as stars, planets, and galaxies.
            </p>

            <p>
              Crime- An act or the commission of an act that is forbidden or the
              omission of a duty that is commanded by a public law and that
              makes the offender liable to punishment by that law.
            </p>

            <p>
              Disappoint- To fail to fulfill expectations, hopes, or desires; to
              cause someone to feel let down or unsatisfied.
            </p>

            <p>
              Exciting- Causing great enthusiasm, eagerness, or interest;
              stirring emotions or anticipation.
            </p>

            <p>
              Fantasy- A genre of fiction that involves magical or supernatural
              elements, often set in imaginary worlds with fantastical creatures
              and events.
            </p>

            <p>
              Historical Drama- A work of fiction set against a historical
              backdrop, often incorporating real historical events, figures, or
              settings.
            </p>

            <p>
              Horror- A genre of fiction designed to evoke feelings of fear,
              dread, and shock, often involving supernatural or macabre
              elements.
            </p>

            <p>
              Intrigued- Arousing curiosity or interest; fascinated or
              captivated by something.
            </p>

            <p>
              Mystery- A genre of fiction that revolves around solving a crime,
              uncovering secrets, or explaining puzzling events.
            </p>

            <p>
              Non-Fiction- Literature that is based on real events, facts, and
              information, as opposed to being imaginary or fictional.
            </p>

            <p>
              Recommend- To suggest or endorse something as worthy of attention,
              approval, or consideration.
            </p>

            <p>
              Romance- A genre of fiction that focuses on the romantic
              relationships and emotional connections between characters.
            </p>

            <p>
              Science Fiction- A genre of speculative fiction that explores
              imaginative and futuristic concepts often related to technology,
              space exploration, and alternative realities.
            </p>

            <p>
              Spy Novel- A genre of fiction that involves espionage, intrigue,
              and secret agents engaged in covert operations.
            </p>

            <p>
              Thriller- A genre of fiction characterized by suspense, tension,
              and excitement, often involving danger, intrigue, and unexpected
              twists.
            </p>

            <p>
              Well-Developed- Describing characters, plots, or ideas that are
              thoroughly explored, detailed, and intricately crafted in a work
              of fiction or other creative endeavors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words3;

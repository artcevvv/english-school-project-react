import React, { useState } from "react";
import "./Words.css";

const Words2 = () => {
  const [Intro, setIntro] = useState(true);
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [D, setD] = useState(false);

  const IntroHandler = () => {
    setIntro(true);
    setA(false);
    setB(false);
    setD(false);
  };
  const AHandler = () => {
    setIntro(false);
    setA(true);
    setB(false);
    setD(false);
  };
  const BHandler = () => {
    setIntro(false);
    setA(false);
    setB(true);
    setD(false);
  };
  const DHandler = () => {
    setIntro(false);
    setA(false);
    setB(false);
    setD(true);
  };

  return (
    <div className="glossary__words-container section__padding">
      <div className="glossary__words-heading"><h1>Controversial Issues</h1></div>
      <div className="glossary__words-section">
        <div className="glossary__words-section_names">
          <div className="glossary__words-section_name" onClick={IntroHandler}>
            Introduction
          </div>
          <div className="glossary__words-section_name" onClick={AHandler}>
            2A
          </div>
          <div className="glossary__words-section_name" onClick={BHandler}>
            2B
          </div>
          <div className="glossary__words-section_name" onClick={DHandler}>
            2D
          </div>
        </div>
        {Intro && (
          <div className="glossary__words-section_content">
            <p>
              Accommodation- A place where someone lives or stays, often
              referring to housing or lodging.
            </p>

            <p>
              Environmental Problem- An issue or challenge related to the
              natural world and ecosystems, often caused by human activities,
              that can have detrimental effects on the environment.
            </p>

            <p>
              Government- The system or organization responsible for governing
              and managing a country, state, or community, including making and
              enforcing laws and policies.
            </p>

            <p>
              Help Out- To provide assistance or support to someone or a cause,
              often by offering one's time, resources, or efforts.
            </p>

            <p>
              Homelessness- The condition of not having a stable, safe, and
              regular place to live, often resulting in individuals or families
              living on the streets or in temporary shelters.
            </p>

            <p>
              Household Waste- The waste materials generated in a household,
              such as garbage, recyclables, and other discarded items.
            </p>

            <p>
              Landfill- A designated area where solid waste, such as household
              trash and industrial waste, is disposed of and buried in a
              controlled manner to reduce environmental impact.
            </p>

            <p>
              Packaging- Materials used to wrap, contain, or protect products,
              often for transportation, storage, or display.
            </p>

            <p>
              Pollution- The introduction of harmful or undesirable substances
              into the environment, air, water, or soil, resulting in adverse
              effects on ecosystems, human health, or the environment.
            </p>

            <p>
              Poverty- The condition of lacking the financial and material
              resources necessary for a minimum standard of living, often
              leading to a lack of access to basic needs like food, shelter, and
              healthcare.
            </p>

            <p>
              Recycle- The process of collecting and processing materials (such
              as paper, glass, and plastics) to be reused, typically to reduce
              waste and conserve resources.
            </p>

            <p>
              Rubbish- Waste materials or items that are considered worthless,
              discarded, or no longer needed.
            </p>

            <p>
              Social Problem- A condition or issue in society that negatively
              affects a significant portion of the population, often requiring
              collective efforts and solutions for resolution.
            </p>

            <p>
              Unemployment- The state of being without a paid job or occupation,
              typically sought by individuals in the workforce who are willing
              and able to work.
            </p>

            <p>
              Volunteer- To offer one's time, skills, or services willingly and
              without financial compensation, often for charitable, community,
              or humanitarian purposes.
            </p>
          </div>
        )}

        {A && (
          <div className="glossary__words-section_content">
            <p>
              Allowed Into- Permitted or granted access to a particular place or
              situation.
            </p>

            <p>
              Ancestor- A person from whom one is descended, typically further
              back in one's family tree, such as a grandparent,
              great-grandparent, or earlier relative.
            </p>

            <p>
              Newcomer- A person who has recently arrived in a place, community,
              or organization and is new to that environment.
            </p>

            <p>
              Disability- A physical, mental, or cognitive condition that limits
              a person's ability to perform certain activities, often requiring
              accommodations or support.
            </p>

            <p>
              Exchange- The act of giving one thing and receiving something else
              in return, often involving goods, information, or services.
            </p>

            <p>
              Gateway- A point of entry, access, or transition into a particular
              place or system, often serving as an entry point.
            </p>

            <p>
              Immigrant- A person who has moved to a different country or region
              to establish permanent residency or citizenship.
            </p>

            <p>
              Legal- In accordance with the law, regulations, or established
              rules, and conforming to the legal system.
            </p>

            <p>
              Medical- Relating to the field of medicine, which involves the
              diagnosis, treatment, and prevention of diseases and injuries.
            </p>

            <p>
              Nickname- A familiar or informal name given to a person, often
              reflecting a characteristic or personality trait, which may differ
              from their formal given name.
            </p>

            <p>
              Passenger- A person who travels in a vehicle, such as a car, bus,
              train, or airplane, but is not the driver or operator.
            </p>

            <p>
              Permanently- In a manner that lasts indefinitely or for an
              extended duration without temporary or intermittent changes.
            </p>

            <p>
              Pier- A structure that extends into a body of water, typically for
              docking boats, ships, or for recreational purposes.
            </p>

            <p>
              Process- A series of actions or steps taken to achieve a
              particular result, often following a specific sequence or set of
              activities.
            </p>

            <p>
              Proof- Evidence or information that supports a claim, statement,
              or the authenticity of something, often used to verify the truth
              or validity of a concept or idea.
            </p>

            <p>
              Thorough- Conducting a task, examination, or investigation with
              great attention to detail, care, and completeness, leaving no
              important aspects or components unexamined.
            </p>
          </div>
        )}

        {B && (
          <div className="glossary__words-section_content">
            <p>
              Ban- To prohibit or officially forbid something, often through a
              legal or authoritative decision.
            </p>

            <p>
              Conservation- The careful management and protection of natural
              resources, wildlife, and the environment to ensure their
              sustainability and prevent depletion.
            </p>

            <p>
              Fine- A sum of money imposed as a penalty for breaking a rule,
              law, or regulation.
            </p>

            <p>
              Fossil Fuel- Fuel sources derived from ancient organic matter,
              such as coal, oil, and natural gas, which are used for energy
              production.
            </p>

            <p>
              Global Warming- The long-term increase in Earth's average surface
              temperature, primarily due to human activities, such as the
              release of greenhouse gases.
            </p>

            <p>
              Greenhouse Gas- Gases, such as carbon dioxide and methane, that
              trap heat in the Earth's atmosphere, contributing to the
              greenhouse effect and global warming.
            </p>

            <p>
              Invest- To allocate money, time, or resources with the expectation
              of achieving a future benefit or return, often in the context of
              business or financial endeavors.
            </p>

            <p>
              Oil Spill- The accidental release of oil into a body of water,
              often as a result of human or industrial activity, causing
              environmental damage.
            </p>

            <p>
              Ozone Layer- A region of the Earth's stratosphere that contains a
              relatively high concentration of ozone (O3) and protects the
              planet from harmful ultraviolet (UV) radiation from the sun.
            </p>

            <p>
              Prevent- To stop or hinder something from happening or to take
              measures to avoid or control a particular situation or event.
            </p>

            <p>
              Raise Money- To gather funds or financial resources, often through
              various means such as donations, fundraising, or investments.
            </p>

            <p>
              Reduce- To make something smaller in quantity, size, or intensity,
              or to lessen the impact or presence of something.
            </p>

            <p>
              Save- To keep something from being lost, damaged, or wasted, often
              with the goal of preserving it for future use or enjoyment.
            </p>

            <p>
              Smog- A type of air pollution characterized by a mixture of smoke
              and fog, often resulting from the interaction of pollutants in the
              atmosphere, particularly in urban areas.
            </p>
          </div>
        )}

        {D && (
          <div className="glossary__words-section_content">
            <p>
              Equal Society- A society in which all individuals have the same
              rights, opportunities, and access to resources, regardless of
              their background, characteristics, or circumstances.
            </p>

            <p>
              Fight Inequality- To actively work against and oppose disparities
              in social, economic, or political conditions and strive for a more
              equitable society.
            </p>

            <p>
              Freedom- The state of being able to act, speak, or make choices
              without being restrained or oppressed, often within the bounds of
              established laws and regulations.
            </p>

            <p>
              Gender Equality- The principle of granting equal rights,
              opportunities, and treatment to people of all genders, eliminating
              discrimination or bias based on gender.
            </p>

            <p>
              Gender Role- The set of societal and cultural expectations and
              norms that define the behaviors, responsibilities, and roles
              considered appropriate for individuals of a particular gender.
            </p>

            <p>
              Helpmate- A supportive partner or companion who provides
              assistance, aid, or support to another person, often in a personal
              or domestic context.
            </p>

            <p>
              Labour Union- An organized association of workers formed to
              protect and advocate for their rights and interests in the
              workplace, typically focusing on issues such as wages, working
              conditions, and benefits.
            </p>

            <p>
              Prejudice- Unfair and preconceived opinions or judgments about a
              person or group based on their characteristics, such as race,
              religion, or gender, rather than on individual merit or behavior.
            </p>

            <p>
              Right- A moral or legal entitlement to do something or to be
              treated in a certain way, often protected by laws or social norms.
            </p>

            <p>
              Significantly- To a considerable or noteworthy extent, indicating
              a meaningful or substantial impact or change.
            </p>

            <p>
              Strike- A collective action taken by workers to stop working in
              protest, often to demand better working conditions, higher pay, or
              other labor-related improvements.
            </p>

            <p>
              Vote- The act of participating in an election by selecting a
              candidate, policy, or decision, often by marking a ballot or
              expressing a choice to influence the outcome.
            </p>

            <p>
              Workforce- The collective group of employees, laborers, or workers
              within an organization, industry, or country.
            </p>

            <p>
              Workplace- The physical location or environment where people
              perform their jobs or employment-related tasks, and the broader
              social and organizational context in which work occurs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words2;

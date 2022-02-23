//*Imports
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//*Components
import FilmsComp from "./components/FilmsComp";
import PeopleComp from "./components/PeopleComp";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  const getFilms = async () => {
    const response = await fetch("films endpoint goes here");
    const filmData = await response.json();
    setFilms(filmData);
  };

  const getPeople = async () => {
    const response = await fetch("people endpoint goes here");
    const peopleData = await response.json();
    setPeople(peopleData);
  };

  return (
    <>
      <div>Gibbly Getter!</div>
      <button onClick={getFilms}>Gibblee Films</button>
      <button onClick={getPeople}>Gibblie People</button>
      <div>components below</div>
      <FilmsComp />
      <PeopleComp />
    </>
  );
};

export default App;

// todo conditionally render films/people based on which button was clicked
// todo disable film button if already rendering film component
// todo add boots styling
// todo map over films
// todo map over people
// todo
// todo

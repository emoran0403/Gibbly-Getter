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
    // fetches data from the api
    const response = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
    const filmData = await response.json(); // parses the response as JSON data to produce a JS object
    console.log(filmData); // logs the films object
    setFilms(filmData); // passes the films object to the films state, which is then sent to the Films Component
  };

  const getPeople = async () => {
    // fetches data from the api
    const response = await fetch("https://ghibliapi.herokuapp.com/people"); // this is the fetch
    const peopleData = await response.json(); // parses the response as JSON data to produce a JS object
    console.log(peopleData); // logs the people object
    setPeople(peopleData); // passes the people object to the people state, which is then sent to the People Component
  };

  return (
    <>
      <div>Gibbly Getter!</div>
      <button onClick={getFilms}>Gibblee Films</button>
      <button onClick={getPeople}>Gibblie People</button>
      <div>components below</div>
      <FilmsComp movies={films} />
      <PeopleComp characters={people} />
    </>
  );
};

export default App;

// todo conditionally render films/people based on which button was clicked
// todo disable film button if already rendering film component
// todo add boots styling
// todo map over films
// todo map over people
// todo convert running_time to display XX HR XX MIN
// todo link to open a new tab with the JSON for that particular film / person => concatenate endpoint with id, but how to get it to concat within a link?
// todo set the movie banner as the background on each card

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
  const [view, setView] = useState(0);

  const getFilms = async () => {
    //this is view 1
    // fetches data from the api
    const response = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
    const filmData = await response.json(); // parses the response as JSON data to produce a JS object
    // console.log(filmData); // logs the films object
    setFilms(filmData); // passes the films object to the films state, which is then sent to the Films Component
    setView(1);
  };

  const getPeople = async () => {
    //this is veiw 2
    // fetches data from the api
    const response1 = await fetch("https://ghibliapi.herokuapp.com/people"); // this is the fetch
    const peopleData = await response1.json(); // parses the response as JSON data to produce a JS object
    // console.log(peopleData); // logs the people object
    setPeople(peopleData); // passes the people object to the people state, which is then sent to the People Component
    setView(2);
    //**********just in case user clicks on people first */
    const response2 = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
    const filmData = await response2.json(); // parses the response as JSON data to produce a JS object
    // console.log(filmData); // logs the films object
    setFilms(filmData);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-lg mx-2" onClick={getFilms}>
          Gibblee Films
        </button>
        <button className="btn btn-primary btn-lg mx-2" onClick={getPeople}>
          Gibblie People
        </button>
      </div>
      {view === 1 && ( // this displays Films Component when the films button is clicked
        <>
          <FilmsComp movies={films} />
        </>
      )}

      {view === 2 && ( // this displays People Component when the films button is clicked
        <>
          <PeopleComp characters={people} films={films} />
        </>
      )}
    </>
  );
};

export default App;

// todo display which film a character appears in => people - fectch films - title
// todo dispaly the species of a character => people - fetch species - name
//* disable film button if already rendering film component - button does nothing when clicked if already displaying the data
//* conditionally render films/people based on which button was clicked
//* add boots styling
//* map over films
//* map over people
//* convert running_time to display XX HR XX MIN
//* link to open a new tab with the JSON for that particular film / person =>? concatenate endpoint with id, but how to get it to concat within a link?
//* =>? how to use the src="{props.movie_banner}" to display the movie artwork?

// {view === 1 && (<><FilmsComp movies={films} /></>)}
// {view === 2 && (<><PeopleComp characters={people} films={films} /></>)}

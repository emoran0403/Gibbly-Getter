import React from "react";

const PeopleComp = (props) => {
  // console.log(props.films);

  // let temp = "https://ghibliapi.herokuapp.com/films/";
  // console.log(temp.length);

  // for (let i = 0; i <= props.characters.length - 1; i++) {
  //   // console.log(props.characters[i]);
  //   for (let j = 0; j <= props.characters[i].films.length - 1; j++) {
  //     console.log(props.characters[i].films[0]);
  //     // console.log(`character ${i}`);
  //   }
  // }

  /**
   * props.characters[i].films[0] this gets the first film in the film array, which is the movie appearance
   * since there is only 1 film in the array, i use position [0]
   * the film id is at the end, and each url is the same length
   * props.films[0].substring(38) gives me the id of the particular movie
   * with the movie id from character, i then have to go thru the movies array, then into each movie object, and compare it with the id key
   * if they are a match, then i need to get that movies title from the title property
   *
   *
   *
   *
   * a similar process can be done for the species
   *
   *
   */

  const getMovieTitle = (character) => {
    console.log(character);
    console.log(props.films);

    let movieIDfromChar = character.films[0].substring(38); // this is the movie id from the character
    for (let i = 0; i <= props.films.length; i++) {
      // this will go thru each film
      let movieIDfromMovie = props.films[i].id; // this is the movie id, which we are looking to match to the movie id from character
      if (movieIDfromChar === movieIDfromMovie) {
        return props.films[i].title; // if it is a match, then return the title
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.characters.map((character) => (
            <div key={character.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  {character.name} | {character.gender} | {character.age}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Eye-color: {character.eye_color} | Hair-Color: {character.hair_color}
                </h6>
                <p className="card-text">Appears in: {getMovieTitle(character)}</p>
                <footer className="blockquote-footer">
                  <a className="btn btn-success btn-sm" href={character.url} target="_blank">
                    View my JSON
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleComp;

/**
 *
 * string - slice if i know where the id starts and ends, and only if it starts at the same index every time = it probably does, but not the best option
 * string.substring(x) will grab the end of the string automaticaly - a little easier than slice, but has the same drawbacks
 * string.split('charToSplitAt') will put the id as an element into a new array
 *
 */

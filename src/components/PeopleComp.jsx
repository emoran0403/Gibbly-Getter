import React from "react";

const PeopleComp = (props) => {
  // console.log(props.films);

  // for (let i = 0; i <= props.characters.length; i++) {
  //   // console.log(props.characters[i]);
  //   for (let j = 0; j <= props.characters[i].films.length; j++) {
  //     console.log(props.characters[i].films[0]);
  //   }
  // }

  /**
   * props.characters[i].films[0] this gets the first film in the film array, which is the appearance
   * i can then do some string manip to match that to the film
   * then finally display the film name
   *
   * a similar process can be done for the species
   *
   *
   */

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.characters.map((props) => (
            <div key={props.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  {props.name} | {props.gender} | {props.age}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Species: props.species | Eye-color: {props.eye_color} | Hair-Color: {props.hair_color}
                </h6>
                <p className="card-text">Appears in: props.films</p>
                <footer className="blockquote-footer">
                  <a className="btn btn-success btn-sm" href={props.url} target="_blank">
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

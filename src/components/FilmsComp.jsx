import React from "react";

const FilmsComp = (props) => {
  // props.movies is the movies object

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.movies.map((props) => (
            <div key={props.id} className="card col-md-6">
              <img className="card-img-top" src={props.movie_banner} alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">
                  {props.title} | {props.original_title} | {props.original_title_romanised}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Directed by: {props.director} | Produced by: {props.producer}
                </h6>
                <p className="card-text">{props.description}</p>
                <footer className="blockquote-footer">
                  <a className="btn btn-success btn-sm" href={props.url} target="_blank">
                    View my JSON
                  </a>
                  Release date: {props.release_date} Run time: {Math.floor(props.running_time / 60) + " Hrs " + (props.running_time % 60) + " Mins"}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilmsComp;

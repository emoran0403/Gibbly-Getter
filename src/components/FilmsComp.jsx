import React from "react";

const FilmsComp = (props) => {
  // props.movies is the movies object
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.movies.map((props) => (
            <div key={props.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  {props.title} | {props.original_title} | {props.original_title_romanised}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Directed by: {props.director} | Produced by: {props.producer}
                </h6>
                <p className="card-text">{props.description}</p>
                <footer className="blockquote-footer">
                  Release date: {props.release_date} Run time: {props.running_time}
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

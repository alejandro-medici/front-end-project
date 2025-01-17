import React from "react";

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
    };
    }

    componentDidMount() {

    }

    handleClick(movie) {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.title || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    render() {
        return (
            <div className="row">
              <h2>{title}</h2>
              <div className="row_posters">
                {movies?.map((movie) => {
                  return (
                    <img
                      key={movie.id}
                      onClick={() => this.handleClick.bind(movie)}
                      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie.name}
                    />
                  );
                })}
              </div>
              <div style={{ padding: "40px" }}>
                {trailerUrl && <video src={trailerUrl} opts={opts} />}
              </div>
            </div>
          );
        }
    }
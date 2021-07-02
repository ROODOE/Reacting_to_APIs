import React, { useState, useEffect } from 'react';
import App from './App';

const Film = () => {
    const [filmsInfo, setFilmsInfo] = useState([]);
    // const [filmsState, setFilmsState] = useState(false);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response) => {
                return response.json()
            }).then(allFilms => setFilmsInfo(allFilms))
    }, []);

    return (

        <div className='content-container'>
            {filmsInfo.map(film => {
                return (
                    <div className="card shadow mb-1">
                        <div className="card-body bg-light">
                            <h5 className="card-title bg-light">{film.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted bg-light">{film.original_title_romanised}</h6>
                            <a className="card-text bg-light" target="_blank" href={film.url}>{film.title}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Film;
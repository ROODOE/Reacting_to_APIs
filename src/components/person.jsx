import React, { useState, useEffect } from 'react';
import App from './App';

const Person = () => {
    const [personInfo, setPersonInfo] = useState([]);
    // const [personState, setPersonState] = useState(false);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((response) => {
                return response.json()
            }).then(allPerson => setPersonInfo(allPerson))
    }, []);

    return (
        <>
            <div className='content-container'>
                {personInfo.map(person => {
                    return (
                        <div className="card shadow mb-1">
                            <div className="card-body bg-light">
                                <h5 className="card-title bg-light">{person.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted bg-light">{person.age}</h6>
                                <a className="card-text bg-light" target="_blank" href={person.url}>{person.name}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Person;
import React, { useState, useEffect } from 'react';
import './style.css';
import Person from './person';
import Film from './film';

const App = () => {

    const [filmState, setFilmState] = useState(false);
    const [personState, setPersonState] = useState(false);

    const handleFilmState = () => {
        setFilmState(false)
        setPersonState(true)
    }

    const handlePersonState = () => {
        setPersonState(false)
        setFilmState(true)
    }

    if(filmState === false && personState === false) {

        return (
            <>
                <main className='container my-5'>
                    <img src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="main-img rounded-pill" alt="https://www.google.com"></img><br></br>
                    <div className='links'>
                        <a href="#" className="card-link" onClick={e => setFilmState(true)}>Load Films</a><br></br>
                        <a href="#" className="card-link" onClick={e => setPersonState(true)}>Load People</a>
                    </div>
                </main>
   
                <div className='content-container'>
                    <div className="card shadow">
                        <div className="card-body bg-light">
                            <h5 className="card-title bg-light">My Amazing Skills</h5>
                            <h6 className="card-subtitle mb-2 text-muted bg-light">A true testament</h6>
                            <p className="card-text bg-light">Yes, i'm very good.. I know.</p>
    
                        </div>
                    </div>
                    
                </div>
            </>
        )
    } else if (filmState === true && personState === false) {

        return (
            <>
                <main className='container my-5'>
                    <img src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="main-img rounded-pill" alt="https://www.google.com"></img><br></br>
                    <div className='links'>
                        <a href="#" className="card-link" onClick={e => setFilmState(false)}>Load Films</a><br></br>
                        <a href="#" className="card-link" onClick={e => handleFilmState()}>Load People</a>
                    </div>
                </main>
    
                <div className='content-container'>
                    <Film />
                </div>
            </>
        )
    }else if(filmState === false && personState === true) {

        return (
            <>
                <main className='container my-5'>
                    <img src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="main-img rounded-pill" alt="https://www.google.com"></img><br></br>
                    <div className='links'>
                        <a href="#" className="card-link" onClick={e => handlePersonState()}>Load Films</a><br></br>
                        <a href="#" className="card-link" onClick={e => setPersonState(false)}>Load People</a>
                    </div>
                </main>
    
                <div className='content-container'>
                    <Person />
                </div>
            </>
        )

    }

    // return (
    //     <>
    //         <main className='container my-5'>
    //             <img src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="main-img rounded-pill" alt="https://www.google.com"></img><br></br>
    //             <div className='links'>
    //                 <a href="#" className="card-link" >Load Films</a><br></br>
    //                 <a href="#" className="card-link" >Load People</a>
    //             </div>
    //         </main>

    //         <div className='content-container'>
    //             <div className="card shadow">
    //                 <div className="card-body bg-light">
    //                     <h5 className="card-title bg-light">My Amazing Skills</h5>
    //                     <h6 className="card-subtitle mb-2 text-muted bg-light">A true testament</h6>
    //                     <p className="card-text bg-light">Yes, i'm very good.. I know.</p>

    //                 </div>
    //             </div>
    //             <Film />
    //             <Person />
    //         </div>
    //     </>
    // )
}

export default App;
import React from 'react';
import beer from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='d-flex justify-content-center '>
            <div  className="card" style={{width: "18rem"}}>
                <Link to='/all-beers'>
                    <img src={beer} className="card-img-top" alt="All beers"/>
                </Link>
                <div className="card-body">
                    <h2>All Beers</h2>
                    <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <Link to='/random-beer'>
                    <img src={randomBeer} className="card-img-top" alt="Random Beer"/>
                </Link>
                <div className="card-body">
                    <h2>Random Beer</h2>
                    <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <Link to='/new-beer'><img src={newBeer} className="card-img-top" alt="New Beer"/></Link>
                <div className="card-body">
                    <h2>All Beers</h2>
                    <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                </div>
            </div>
        </div>
    );

}

export default Home;
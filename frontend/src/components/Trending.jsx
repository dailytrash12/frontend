import React from 'react'
import Dune from '../assets/images/trending/dune.jpg'
import Morbius from '../assets/images/trending/morbius.jpg'
import Joker from '../assets/images/trending/joker.jpg'
import Lightyear from '../assets/images/trending/lightyear.jpg'
import Everything from '../assets/images/trending/everything.jpg'

function Trending() {
    return (
        <div className='container-fluid trending' id='trending'>
            <div className="container p-3 text-light">
                <h3>Trending</h3>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={Dune} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">DUNE</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={Morbius} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">MORBIUS</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={Joker} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">JOKER</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="container p-3">
                        <div className="row">
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div class="card" style={{ width: '18rem' }}>
                                    <img src={Lightyear} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">LIGHTYEAR</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div class="card" style={{ width: '17rem' }}>
                                    <img src={Everything} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">EVERYTHING</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div class="card" style={{ width: '16rem' }}>
                                    <img src={Dune} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">DUNE</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending

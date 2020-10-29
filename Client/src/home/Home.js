import React from 'react';

const Home = () => (
    <div className="container">
        <div className="row justify-content-center pad-top">
            <img src={require('../logo_wide.png')} alt="flybywire-logo" className="main-logo" />
        </div>
        <div className="row justify-content-center pad-top">
            <h1>Welcome to FlyByWire Simulations</h1>
        </div>
        <div className="row justify-content-center">
            <h5>Creators of the A32NX Mod for Microsoft Flight Simulator</h5>
        </div>
    </div>
);

export default Home;
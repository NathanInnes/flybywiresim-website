import React from 'react';

const Media = () => (
    <div className="container">
        <div class="card mb-3">
            <h3 class="card-header text-center">Screenshots</h3>
            <div class="card-body">
                <h5 class="card-title text-center">Exterior FlyByWire livery</h5>
            </div>
            <img className="card-image" src="screenshots/flyby-2.png" alt="Exterior livery" />
            <div class="card-body">
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title text-center">Cockpit re-texture</h5>
            </div>
            <img className="card-image" src="screenshots/cockpit-1.png" alt="Cockpit re-texture" />
            <div class="card-body">
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title text-center">Cockpit re-texture daytime</h5>
            </div>
            <img className="card-image" src="screenshots/cockpit-2.png" alt="Cockpit re-texture daytime" />
            <div class="card-body">
                <p class="card-text"></p>
            </div>
        </div>
    </div>
)

export default Media;
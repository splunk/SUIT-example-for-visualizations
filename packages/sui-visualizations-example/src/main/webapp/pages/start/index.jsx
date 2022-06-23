import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import layout from '@splunk/react-page';
// import RadarChart from '@splunk/radar-chart';

import Homepage from './Homepage';
import SplunkVizExample from '../splunkViz/SplunkViz';
import ThirdPartyExample from '../3PWithoutDF/3pWithoutDF';
import RadarDashboard from '../3PwithDF/RadarDashboard';

layout(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="en-US/app/sui-visualizations-example/start" element={<Homepage />} />
                <Route
                    path="/app/sui-visualizations-example/splunkViz1"
                    element={<SplunkVizExample />}
                />
                <Route
                    path="/app/sui-visualizations-example/3PwithDF1"
                    element={<RadarDashboard />}
                />
                <Route
                    path="/app/sui-visualizations-example/3PwithoutDF1"
                    element={<ThirdPartyExample />}
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

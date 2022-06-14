import React from 'react';
import layout from '@splunk/react-page';
import RadarDashboard from './RadarDashboard';

layout(<RadarDashboard />, {
    pageTitle: 'Third Party Viz in Dashboard',
    hideFooter: true,
    layout: 'fixed',
});

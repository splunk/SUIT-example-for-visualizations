import React from 'react';
import layout from '@splunk/react-page';
import SplunkVizExample from './SplunkViz';

layout(<SplunkVizExample />, {
    pageTitle: 'Splunk Visualizations',
    hideFooter: false,
    layout: 'scrolling',
});

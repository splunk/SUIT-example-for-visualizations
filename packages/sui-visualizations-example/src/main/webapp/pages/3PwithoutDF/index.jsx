import React from 'react';
import layout from '@splunk/react-page';
import Example from './3PwithoutDF';
// import Example from './3PwithoutDF';

layout(<Example />, {
    pageTitle: 'Third Party without Dashboard',
    hideFooter: false,
    layout: 'scrolling',
});

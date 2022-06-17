import React from 'react';
import layout from '@splunk/react-page';
import ThirdPartyExample from './3PwithoutDF';

layout(<ThirdPartyExample />, {
    pageTitle: 'Third Party without Dashboard',
    hideFooter: false,
    layout: 'scrolling',
});

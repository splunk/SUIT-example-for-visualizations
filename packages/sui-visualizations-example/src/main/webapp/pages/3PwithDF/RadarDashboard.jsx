import React from 'react';

import DashboardCore from '@splunk/dashboard-core';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';

import CustomRadar from '@splunk/radar-chart';
import definition from './definition.json';

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
};

// use DashboardCore to render a simple dashboard
const customPreset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'splunk.CustomRadar': CustomRadar,
    },
};

const RadarDashboard = () => {
    return (
        <SplunkThemeProvider {...themeToVariant.enterprise}>
            <DashboardContextProvider>
                <DashboardCore
                    width="100%"
                    height="100%"
                    preset={customPreset}
                    definition={definition}
                />
            </DashboardContextProvider>
        </SplunkThemeProvider>
    );
};

export default RadarDashboard;

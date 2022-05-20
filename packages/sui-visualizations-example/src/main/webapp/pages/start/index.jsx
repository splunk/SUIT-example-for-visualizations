import React from 'react';

import layout from '@splunk/react-page';
import RadarChart from '@splunk/radar-chart';
import { SplunkThemeProvider } from '@splunk/themes';

import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

const themeProviderSettings = getThemeOptions(defaultTheme() || 'enterprise');

layout(
    <SplunkThemeProvider {...themeProviderSettings}>
        <StyledContainer>
            <StyledGreeting>Hello, from inside SuiVisualizationsExample!</StyledGreeting>
            <div>Your component will appear below.</div>
            <RadarChart name="from inside RadarChart" />
        </StyledContainer>
    </SplunkThemeProvider>
);

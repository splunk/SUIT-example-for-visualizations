import React from 'react';

import layout from '@splunk/react-page';
// import RadarChart from '@splunk/radar-chart';
import VisualizationCard from '@splunk/visualization-card';
import { SplunkThemeProvider } from '@splunk/themes';
import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import Sankey from './Images/sankey.png';
import Radar from './Images/radar.png';
import Treemap from './Images/treemap.png';

import { StyledContainer, StyledGreeting } from './StartStyles';

const themeProviderSettings = getThemeOptions(defaultTheme() || 'enterprise');

layout(
    <SplunkThemeProvider {...themeProviderSettings}>
        <StyledContainer>
            <StyledGreeting>Visualizations with Splunk UI Toolkit</StyledGreeting>
            <div>
                This app is designed to showcase and provide practical code examples of how
                visualizations can be done with the Splunk UI Toolkit. There are many options
                available to Splunk developers on how they want to visualize data outside of Splunk
                Dashboard Studio or Simple XML Dashboards. The following cards direct to examples of
                three possible ways a developer can directly code visualizations in their Splunk
                app.
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '25px',
                }}
            >
                <div>
                    <VisualizationCard
                        src={Sankey}
                        title="Splunk Visualization (Sankey Diagram)"
                        subtitle="Without Dashboard Framework (ReactJS Only)"
                        alt="Sankey Diagram Image"
                    />
                </div>
                <div>
                    <VisualizationCard
                        src={Radar}
                        title="3rd Party Visualization (Radar Chart)"
                        subtitle="Within Splunk Dashboard Framework"
                        alt="Radar Chart Image"
                    />
                </div>
                <div>
                    <VisualizationCard
                        src={Treemap}
                        title="3rd Party Visualization (Treemap Diagram)"
                        subtitle="Without Dashboard Framework (ReactJS Only)"
                        alt="Treemap Diagram Image"
                    />
                </div>
            </div>
        </StyledContainer>
    </SplunkThemeProvider>
);

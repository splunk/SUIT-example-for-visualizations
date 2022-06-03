import React from 'react';

import layout from '@splunk/react-page';
// import RadarChart from '@splunk/radar-chart';
import VisualizationCard from '@splunk/visualization-card';
import { SplunkThemeProvider } from '@splunk/themes';
import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

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
                app. Visit each page to learn more about that method&apos;s implementation and the
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '25px',
                }}
            >
                <a
                    style={{ textDecoration: 'none' }}
                    href="/app/sui-visualizations-example/dashboards"
                    target="_blank"
                >
                    <VisualizationCard
                        src="/static/app/sui-visualizations-example/sankey.png"
                        title="Splunk Visualization (Sankey Diagram)"
                        subtitle="Without Dashboard Framework (ReactJS Only)"
                        alt="Sankey Diagram Image"
                    />
                </a>
                <a
                    style={{ textDecoration: 'none' }}
                    href="/app/sui-visualizations-example/dashboards"
                    target="_blank"
                >
                    <VisualizationCard
                        src="/static/app/sui-visualizations-example/radar.png"
                        title="3rd Party Visualization (Radar Chart)"
                        subtitle="Within Splunk Dashboard Framework"
                        alt="Radar Chart Image"
                    />
                </a>
                <a
                    style={{ textDecoration: 'none' }}
                    href="/app/sui-visualizations-example/dashboards"
                    target="_blank"
                >
                    <VisualizationCard
                        src="/static/app/sui-visualizations-example/treemap.png"
                        title="3rd Party Visualization (Treemap Diagram)"
                        subtitle="Without Dashboard Framework (ReactJS Only)"
                        alt="Treemap Diagram Image"
                    />
                </a>
            </div>
        </StyledContainer>
    </SplunkThemeProvider>
);

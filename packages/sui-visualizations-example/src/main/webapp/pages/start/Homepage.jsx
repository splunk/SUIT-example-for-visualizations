import React from 'react';
import VisualizationCard from '@splunk/visualization-card';
import { SplunkThemeProvider } from '@splunk/themes';
import { StyledContainer, StyledGreeting } from './StartStyles';

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
};

const SplunkVizExample = () => {
    return (
        <SplunkThemeProvider {...themeToVariant.enterprise}>
            <StyledContainer>
                <StyledGreeting>Visualizations with Splunk UI Toolkit</StyledGreeting>
                <div>
                    This app is designed to showcase and provide practical code examples of how
                    visualizations can be done with the Splunk UI Toolkit. There are many options
                    available to Splunk developers on how they want to visualize data outside of
                    Splunk Dashboard Studio or Simple XML Dashboards. The following cards direct to
                    examples of three possible ways a developer can directly code visualizations in
                    their Splunk app. Visit each page to learn more about that method&apos;s
                    implementation and the
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
                            src="/static/app/sui-visualizations-example/sankey.png"
                            title="Splunk Visualization (Sankey Diagram)"
                            subtitle="Without Dashboard Framework (ReactJS Only)"
                            alt="4"
                            url="/app/sui-visualizations-example/splunkViz1"
                        />
                    </div>
                    <div>
                        <VisualizationCard
                            src="/static/app/sui-visualizations-example/radar.png"
                            title="3rd Party Visualization (Radar Chart)"
                            subtitle="Within Splunk Dashboard Framework"
                            alt="Radar Chart Image"
                            url="/app/sui-visualizations-example/3PwithDF1"
                        />
                    </div>
                    <div>
                        <VisualizationCard
                            src="/static/app/sui-visualizations-example/funnel.png"
                            title="3rd Party Visualization (Funnel Chart)"
                            subtitle="Without Dashboard Framework (ReactJS Only)"
                            alt="Treemap Diagram Image"
                            url="/app/sui-visualizations-example/3PwithoutDF1"
                        />
                    </div>
                </div>
            </StyledContainer>
        </SplunkThemeProvider>
    );
};

export default SplunkVizExample;

import React, { useState, useEffect } from 'react';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import { LabelList, Funnel, FunnelChart, Tooltip } from 'recharts';
import Markdown from '@splunk/visualizations/Markdown';
import Table from '@splunk/react-ui/Table';
import SearchJob from '@splunk/search-job';

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
};

const mySearchJob = SearchJob.create({
    search: '|inputlookup funnel.csv',
    earliest_time: '-60m@m',
    latest_time: 'now',
});

const params = {
    output_mode: 'json',
};

const Example = () => {
    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        const subscription = mySearchJob.getResults(params).subscribe((results) => {
            setDataState(results.results);
            console.log(results.results);
        });
        // clean up func
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <div>
            <SplunkThemeProvider {...themeToVariant.enterprise}>
                <Markdown
                    options={{
                        markdown:
                            '# Third Party Visualizations outside of Dashboards \nThis example shows how to use third party visualizations outside of the Splunk Dashboard Framework. This is different from what was shown in [this dashboard] which shows how to use third party visualizations within the Splunk Dashboard Framework. This is essentially just using a React component in a Splunk page, and have it hooked up to a Splunk search. ',
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            '## Funnel Chart \nIn this page we use the [Funnel Chart](https://splunkui.splunk.com/Packages/visualizations/?path=%2FSankey) from the `recharts` library. We also use the [Markdown](https://splunkui.splunk.com/Packages/visualizations/?path=%2FMarkdown) visualization for the text you are reading now, as well as the `Table` component from the Splunk UI [react-ui package](https://splunkui.splunk.com/Packages/visualizations/?path=%2FTable) to show the output of the Splunk search we are using.',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <FunnelChart width={730} height={250}>
                            <Tooltip />
                            <Funnel dataKey="value" data={dataState} isAnimationActive>
                                <LabelList
                                    position="right"
                                    fill="#000"
                                    stroke="none"
                                    dataKey="status"
                                />
                            </Funnel>
                        </FunnelChart>
                    </div>
                </div>
                <Table stripeRows>
                    <Table.Head>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell align="right">Value</Table.HeadCell>
                        <Table.HeadCell>Fill</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {dataState.map((row) => (
                            <Table.Row key={row.status}>
                                <Table.Cell>{row.status}</Table.Cell>
                                <Table.Cell align="right">{row.value}</Table.Cell>
                                <Table.Cell>{row.fill}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Markdown
                    options={{
                        markdown:
                            '## Splunk Searches \nThe benefit of using a component within Splunk Web is that you can run a Splunk search directly in your app, without worrying about authentication or CORS configuration. This can be done with the `@splunk/search-job` package from the [Splunk UI Toolkit](https://splunkui.splunk.com/Packages/search-job/Overview). Simply put, this package provides you the `SearchJob` class that allows you to subscribe to search results and use them within your app. The package also allows you to create parameters according to the search endpoint API that allow you specify the results output. The example below shows how the SearchJob package was used to retrieve search results in `json` form. When making a SearchJob to bind data to a visualization component, consider consulting the API documentation for that component. In many cases, you can adjust the `requestParams` to that Splunk returns data in a format that is easy to work with for that component.  ',
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            "```\nimport { LabelList, Funnel, FunnelChart, Tooltip } from 'recharts';\nimport Markdown from '@splunk/visualizations/Markdown';\nimport Table from '@splunk/react-ui/Table';\nimport SearchJob from '@splunk/search-job';\n\nconst mySearchJob = SearchJob.create({\n    search: '|inputlookup funnel.csv',\n    earliest_time: '-60m@m',\n    latest_time: 'now',\n});\n\nconst params = {\n    output_mode: 'json',\n};\n\nconst Example = () => {\n    const [dataState, setDataState] = useState([]);\n\n    useEffect(() => {\n        const subscription = mySearchJob.getResults(params).subscribe((results) => {\n            setDataState(results.results);\n            console.log(results.results);\n        });\n        // clean up func\n        return () => {\n            subscription.unsubscribe();\n        };\n    }, []);\n\n    return (\n    // other component code \n\n    <FunnelChart width={730} height={250}>\n        <Tooltip />\n        <Funnel dataKey=\"value\" data={dataState} isAnimationActive>\n            <LabelList\n                position=\"right\"\n                fill=\"#000\"\n                stroke=\"none\"\n                dataKey=\"status\"\n            />\n        </Funnel>\n    </FunnelChart>\n\n//finish component code\n\n\n```",
                    }}
                />
            </SplunkThemeProvider>
        </div>
    );
};

export default Example;

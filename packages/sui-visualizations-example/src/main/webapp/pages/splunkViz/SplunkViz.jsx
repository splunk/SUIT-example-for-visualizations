import React, { useState, useEffect } from 'react';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import Sankey from '@splunk/visualizations/Sankey';
import Markdown from '@splunk/visualizations/Markdown';
import Table from '@splunk/visualizations/Table';
import SearchJob from '@splunk/search-job';

const mySearchJob = SearchJob.create({
    search: '|inputlookup sankey.csv | fields source, target, value',
    earliest_time: '-60m@m',
    latest_time: 'now',
});

const params = {
    output_mode: 'json_cols',
};

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
};

const SplunkVizExample = () => {
    const [dataFields, setFields] = useState();
    const [dataColumns, setColumns] = useState();

    useEffect(() => {
        const subscription = mySearchJob.getResults(params).subscribe((results) => {
            setFields(results.fields); // update state variables
            setColumns(results.columns);
        });

        // clean up function
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
                            '# Splunk Visualizations \nThis example shows how to use the Splunk Visualizations library, specifically outside of the Splunk Dashboard Framework. \nWhen using the visualization directly, the visualization is treated like any other React component and it can be placed wherever you choose in your DOM. If you have used Dashboard Studio, it is very easy to configure the visualization in the same manner, however instead of JSON, one must pass the visualization configurations such as `options`, `dataSources` and `context` as props. \n ',
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            '## Splunk Sankey \nIn this page we use the [Sankey](https://splunkui.splunk.com/Packages/visualizations/?path=%2FSankey) diagram from the `@splunk/visualizations` package. We also use the [Markdown](https://splunkui.splunk.com/Packages/visualizations/?path=%2FMarkdown) visualization for the text you are reading now, as well as the [Table](https://splunkui.splunk.com/Packages/visualizations/?path=%2FTable) visualization to show the raw output of the Splunk search we are using.',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <Sankey
                            dataSources={{
                                primary: {
                                    data: {
                                        fields: dataFields,
                                        columns: dataColumns,
                                    },
                                    requestParams: { offset: 0, count: 10 },
                                },
                            }}
                        />
                    </div>
                </div>
                <Table
                    context={{}}
                    options={{}}
                    dataSources={{
                        primary: {
                            requestParams: { offset: 0, count: 20 },
                            data: {
                                fields: dataFields,
                                columns: dataColumns,
                            },
                        },
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            '## Splunk Searches \nThe benefit of using a Splunk visulization within Splunk Web is that you can run a Splunk search directly in your app, without worrying about authentication or CORS configuration. This can be done with the `@splunk/search-job` package from the [Splunk UI Toolkit](https://splunkui.splunk.com/Packages/search-job/Overview). Simply put, this package provides you the `SearchJob` class that allows you to subscribe to search results and use them within your app. The package also allows you to create parameters according to the search endpoint API that allow you specify the results output. The example below shows how the SearchJob package was used to retrieve search results in `json_cols` form, which makes it easy for us to use the results in the Sankey diagram, without the need for further data manipulation. Note that these are just various parts, for the full code of this site visit (github link)',
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            '```\nconst mySearchJob = SearchJob.create({\n    search: "|inputlookup sankey.csv | fields source, target, value",\n    earliest_time: "-60m@m",\n    latest_time: \'now\',\n});\n\nconst params = {\n    output_mode: "json_cols",\n};\n\n...\n//render entire Example component\n\nconst SplunkVizExample = () => {\n    const [dataFields, setDataFields] = useState(); //use hooks to create state variables \n    const [dataColumns, setDataColumns] = useState();\n\n    useEffect(() => {\n        //subscribe to results \n        const subscription = mySearchJob.getResults(params).subscribe((results) => {\n            setDataFields(results.fields); // update state variables\n            setDataColumns(results.columns);\n        });\n        // clean up function\n        return () => {\n            subscription.unsubscribe();\n        };\n    }, []);\n\n...\n//pass data into Sankey Diagram component\n\n     <Sankey\n        dataSources={{\n            primary: {\n                data: {\n                    fields: dataFields,\n                    columns: dataColumns,\n                },\n            },\n        }}\n    />\n```',
                    }}
                />
            </SplunkThemeProvider>
        </div>
    );
};

export default SplunkVizExample;

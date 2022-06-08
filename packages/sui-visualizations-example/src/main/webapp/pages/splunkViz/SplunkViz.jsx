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

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
};

const SplunkVizExample = () => {
    const [dataFields, setDataFields] = useState();
    const [dataColumns, setDataColumns] = useState();

    useEffect(() => {
        const subscription = mySearchJob.getResults().subscribe((results) => {
            const data = results.results;
            const fields = Object.keys(data[0]); // grab the field names from the returned data
            const columns = [];

            // map returned data array into an array of just the column information

            fields.forEach((field) => {
                const arr = [];
                data.forEach((obj) => {
                    arr.push(obj[field]);
                });

                // once all have been added to arr
                columns.push(arr);
            });

            // update state variables

            setDataFields(fields);
            setDataColumns(columns);
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
                            '# Splunk Visualizations \nThis example shows how to use the Splunk Visualizations library, specifically outside of the Splunk Dashboard Framework. \nWhen using the visualization directly, the visualization is treated like any other React component and it can be placed wherever you choose in your DOM. If you have used Dashboard Studio, it is very easy to configure the visualization in the same manner, however instead of JSON, one must pass the visualization configurations such as `options`, `dataSources` and `context` as props. \n ',
                    }}
                />
                <Markdown
                    options={{
                        markdown:
                            '## Splunk Sankey \nIn this page we use the Sankey Diagram from the `@splunk/visualizations` package. ',
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
            </SplunkThemeProvider>
        </div>
    );
};

export default SplunkVizExample;

import React, { Component, useState, useEffect, useCallback } from 'react';
import { Radar } from '@nivo/radar';
import SplunkVisualization from '@splunk/visualizations/common/SplunkVisualization';

// this funtion formats the data fromthe dataSource into a format required by the visualization API

const formatData = (dataSources) => {
    const dsData = dataSources?.primary?.data;
    console.log(dsData);
    if (!dsData) {
        return [];
    }

    const data = [];
    const labels = dsData.fields.map((l) => l.name);

    dsData.columns.forEach((column) => {});
    const numColumns = dsData.columns[0]?.length;

    dsData.columns.forEach((column, labelIdx) => {
        column.forEach((item, idx) => {
            if (data.length < idx + 1) {
                data.push({});
            }
            data[idx][labels[labelIdx]] = item;
        });
    });

    return data;
};

const staticData = [
    {
        Item: 'Hats',
        January: 150,
        February: 250,
        March: 200,
    },
    {
        Item: 'Outerwear',
        January: 350,
        February: 375,
        March: 275,
    },
    {
        Item: 'T-shirts',
        January: 100,
        February: 85,
        March: 250,
    },
    {
        Item: 'Accessories',
        January: 124,
        February: 233,
        March: 150,
    },
    {
        Item: 'Stickers',
        January: 50,
        February: 35,
        March: 150,
    },
];

// create the radar chart

const CustomRadar = ({ dataSources }) => {
    const radarData = formatData(dataSources); // format the dataSource from the definition into the proper expected form
    return (
        <>
            <Radar
                width={600}
                height={700}
                keys={['January', 'February', 'March']}
                data={radarData}
                indexBy="Item"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="cardinalClosed"
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor="transparent"
                dotBorderWidth={0}
                colors={{ scheme: 'category10' }}
                motionConfig="slow"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                },
                            },
                        ],
                    },
                ]}
            />
        </>
    );
};

CustomRadar.config = {
    dataContract: {},
    optionsSchema: {},
    key: 'splunk.CustomRadar',
    name: 'CustomRadar',
};

CustomRadar.propTypes = {
    ...SplunkVisualization.propTypes,
};

CustomRadar.defaultProps = {
    ...SplunkVisualization.defaultProps,
};

export default CustomRadar;

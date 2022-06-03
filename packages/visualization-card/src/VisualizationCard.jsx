import React from 'react';
import Card from '@splunk/react-ui/Card';

const VisualizationCard = (props) => {
    return (
        <Card to={props.url} openInNewContext>
            <img src={props.src} style={{ width: '400px', height: '400px' }} alt={props.alt} />
            <Card.Header title={props.title} subtitle={props.subtitle} />
        </Card>
    );
};

export default VisualizationCard;

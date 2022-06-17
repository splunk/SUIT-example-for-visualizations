import React from 'react';
import Card from '@splunk/react-ui/Card';
import PropTypes from 'prop-types';

const VisualizationCard = ({ url, src, title, subtitle, alt }) => {
    VisualizationCard.propTypes = {
        url: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        alt: PropTypes.string,
    };
    return (
        <Card to={url} openInNewContext>
            <img src={src} style={{ width: '400px', height: '400px' }} alt={alt} />
            <Card.Header title={title} subtitle={subtitle} />
        </Card>
    );
};

export default VisualizationCard;

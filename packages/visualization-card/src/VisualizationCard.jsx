import React from 'react';
import Card from '@splunk/react-ui/Card';
import Sankey from './Images/sankey.png';

class VisualizationCard = (props) => {
    static propTypes = {
        name: PropTypes.string,
    };

    const style = { width: 300, height: 400, margin: '0 20px 20px 0' };
    return (
        <div>
            <Card style={style}>
                <Card.Body
                    style={{
                        background: '#d9edf7',
                        textAlign: 'center',
                        padding: '84px 50px',
                        color: '#3a87ad',
                    }}
                >
                    <img className="thumbnail-image" src={props.image} alt={`${props.image}`} />
                </Card.Body>
                <Card.Header title="Blue" subtitle="Check Mark" />
            </Card>
        </div>
    );
};

export default VisualizationCard;

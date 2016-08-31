import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data) / data.length, 1);
}

export default (props) => {
    return (
        <div className="sparkContainer">
            <Sparklines width={100} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div className="dataUnit">{average(props.data)}&nbsp;{props.units}</div>
        </div>
    );
};

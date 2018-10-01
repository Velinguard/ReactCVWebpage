import * as React from 'react';
import {Text, H2} from '@blueprintjs/core';

export function checkStatesEPQ(states){
    return (states.state.Java && 
        states.state.Simulation &&
        (states.state.dateRange[0] <= date && 
            states.state.dateRange[1] >= date));
}

const date = new Date(2016, 4, 1);

export class EPQ extends React.PureComponent{
    render(){
        return (
            <div class="bp3-running-text .modifier">
				<H2> Extended Project - Bridge Strength Analysis </H2>
				<Text>
                    This project aimed at modelling the stress and load experienced by a suspension bridge, comparing these values to the maximum 
                    strength of the materials to determine the max load on the bridge. 
                </Text>
				<Text>
                    This software was designed as a precursor to the Suspension Bridge we would build in India, calculating the measurements we would be 
                    using. This was procedurally programmed, and therefore was limited in its uses from a software side. Bringing together all the 
                    knowledge from my different A-Level subjects into one project; this software was extremely maths heavy from a mechanical perspective, 
                    meaning the mechanics modules I was studying as well as my Physics came into use.
                </Text>
                <Text>
                    As an afterthought, going to India with an idea and a plan although it was somewhat vague gave us a sense that this monumental task 
                    was possible.
				</Text>
            </div>
        );
    }
}
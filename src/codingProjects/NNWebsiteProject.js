import * as React from 'react';
import {Text, H2} from '@blueprintjs/core';

export function checkStatesNNWP(states){
    return (states.state.Web && 
        states.state.NN &&
        (states.state.dateRange[0] <= date && 
            states.state.dateRange[1] >= date));
}

const date = new Date(2018, 5, 1);

export class NNWebsiteProject extends React.PureComponent{
    render(){
        return (
            <div class="bp3-running-text .modifier">
                <Text>Website Project</Text>
            </div>
        );
    }
}
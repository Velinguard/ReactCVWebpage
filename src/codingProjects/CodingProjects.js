import React, { Component } from 'react';
import {StyleSheet, View, Image, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import {Alignment, Button, Checkbox, Classes, Text, Popover, Position, Hotkeys, Hotkey} from '@blueprintjs/core';
import { DateRange, DateRangePicker, TimePrecision } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './CodingProjects.css';
import {EPQ, checkStatesEPQ} from "./EPQ";
import { checkStatesNNCE, NNCExamProject } from './NNCExamProject';
import { checkStatesNNWP, NNWebsiteProject } from './NNWebsiteProject';
import { checkStatesPS, ProjectileShooter } from './ProjectileShooter';
import { checkStatesSE, StarExplorer } from './StarExplorer';
import { StickyContainer, Sticky } from 'react-sticky';
import { PERCENTAGE } from '@blueprintjs/icons/lib/esm/generated/iconContents';

const filterBoxViewWidth = 700;

const styles = StyleSheet.create({
    FilterBox: {
        width: "10%",
        minWidth: 200,
        height: "100%",
        borderWidth: 1, 
        position: 'fixed',
        display: 'block',
        overflow: 'auto',
        flex: 1,
        zIndex: 8,
        backgroundColor: 'white', 
    },
    Value: {
        display: 'inline-block',
        width: '100%',
        paddingLeft: '5%'
    },
    DateRangePicker: {
        zIndex: 9999
    },
    code: {
        width: (Dimensions.get('window').width >= filterBoxViewWidth) ? Dimensions.get('window').width - 200 : "100%",
        marginLeft: (Dimensions.get('window').width >= filterBoxViewWidth) ? 200 : 0,
        display: 'block',
		padding: '1%'
    },
})


function withinRange(firstRange, isInclosedIn){
    return ((isInclosedIn[0] >= firstRange[0] && isInclosedIn[1] <= firstRange[1]) || (isInclosedIn[0] >= firstRange[0] && firstRange[1] == new Date()));
}

function placeWithin(firstRange, toInclose){
    if (firstRange[0] > toInclose[0]){
        firstRange[0] = toInclose[0];
    }
    if (firstRange[1] < toInclose[1]){
        firstRange[1] = toInclose[1];
    }
    if (!withinRange(firstRange, toInclose)){
        alert("Error this should not occur.");
    }
    return firstRange;
}

const firstYearDateRange = [new Date(2017, 9, 8), new Date(2018, 8, 8)];
const beforeUniDateRange = [new Date(2014, 9, 1), new Date(2017, 9, 1)];

export class CodingProjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            Java: true,
            C: true,
            Web: true,
            NN: true,
            AI: true,
            Simulation: true,
            Graphics: true,
            FirstYear: true,
            PreUni: true,
            dateRange: [beforeUniDateRange[0], new Date()],
            filterBoxVisible: false,
        }
    }
    onPress = () => {
        this.setState((prevState) => {Java: false});
    }

    render(){
        let buttonImg = {
			uri : require('./resources/Button.png')
		}
        return (
            <div className="bp3-running-text .modifier" >
                <div className="SearchBox" >
                    
                    {(Dimensions.get('window').width < filterBoxViewWidth) &&                   
                        <div>
                            <button style={{top: 160, width: 50, height: 100, position: 'fixed', left: (this.state.filterBoxVisible) ? 200: 0, zIndex: 7, opacity: 0}} onClick={() => this.setState(prevState => ({filterBoxVisible: !prevState.filterBoxVisible}))}/>
                            <Image 
                                style={{top: 160, width: 50, height: 100, position: 'fixed', left: (this.state.filterBoxVisible) ? 200: 0, zIndex: 5,}}
                                source={buttonImg}
                                accessibilityLabel="The team of 13 that built the bridge."
                                accessible
                            />
                        </div>
                    }

                    {(Dimensions.get('window').width >= filterBoxViewWidth || this.state.filterBoxVisible) &&
                    <View style={styles.FilterBox}>
                        <Text style={styles.Value}>Date:</Text>
                        <Popover style={styles.Value} 
                            content={        
                                <DateRangePicker 
                                    value={this.state.dateRange}
                                    className={Classes.ELEVATION_1}
                                    onChange={(dateRange) => {
                                        if (dateRange[0] > dateRange[1]){
                                            // Assures bigger date is always in [1].
                                            var bigDate = dateRange[0];
                                            dateRange[0] = dateRange[1];
                                            dateRange[1] = bigDate;
                                            if (dateRange[1] < dateRange[0]){
                                                alert("Logic error, end date is bigger then start date.");
                                            }
                                        }
                                        this.setState({ dateRange });
                                        this.setState(prevState => ({FirstYear: withinRange(dateRange, firstYearDateRange)}))
                                        this.setState(prevState => ({PreUni: withinRange(dateRange, beforeUniDateRange)}))
                                    }}
                                    styles={styles.DateRangePicker}
                                />
                            }
                            target={<Button text="Select Date"/>}
                            align={Alignment.CENTER}
                            position={Position.RIGHT}
                        />
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.FirstYear} label="First Year" onChange={() => {
                                this.setState(prevState => ({FirstYear: !prevState.FirstYear}));
                                if (!this.state.FirstYear){ 
                                    this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, firstYearDateRange)}));
                                } else {
                                    if (this.state.PreUni){
                                        this.setState(prevState => ({dateRange: [beforeUniDateRange[0], beforeUniDateRange[1]]}));
                                    } else {
                                        this.setState(prevState => ({dateRange: [firstYearDateRange[1], new Date()]}));
                                    }
                                }
                                }} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.PreUni} label="Before University" onChange={() => {
                                this.setState(prevState => ({PreUni: !prevState.PreUni}));
                                if (!this.state.PreUni){ 
                                    this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, beforeUniDateRange)}));
                                } else {
                                    if (this.state.FirstYear){
                                        this.setState(prevState => ({dateRange: [firstYearDateRange[0], new Date()]}));
                                    } else {
                                        this.setState(prevState => ({dateRange: [new Date(), new Date()]}));
                                    }
                                }
                            }} />
                        </View>
                        <Text style={styles.Value}>Language:</Text>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Java} label="Java" onChange={() => this.setState(prevState => ({Java: !prevState.Java}))} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.C} label="C" onChange={() => this.setState(prevState => ({C: !prevState.C}))} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Web} label="Web Technologies" onChange={() => this.setState(prevState => ({Web: !prevState.Web}))} />
                        </View>
                        <Text style={styles.Value}>Topic:</Text>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.NN} label="Neural Networks" onChange={() => this.setState(prevState => ({NN: !prevState.NN}))} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.AI} label="AI" onChange={() => this.setState(prevState => ({AI: !prevState.AI}))} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Simulation} label="Simulation" onChange={() => this.setState(prevState => ({Simulation: !prevState.Simulation}))} />
                        </View>
                        <View style={styles.Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Graphics} label="Graphics" onChange={() => this.setState(prevState => ({Graphics: !prevState.Graphics}))} />
                        </View>
                    </View>
                    }
                </div>
                <View style={styles.code}>
                    {(checkStatesNNCE(this) && <NNCExamProject/>)}
                    {(checkStatesNNWP(this) && <NNWebsiteProject/>)}
                    {(checkStatesPS(this) && <ProjectileShooter/>)}
                    {(checkStatesSE(this) && <StarExplorer/>)}
                    {(checkStatesEPQ(this) && <EPQ/>)}
                </View>
            </div>
        );
    }
}
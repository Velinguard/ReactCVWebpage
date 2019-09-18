import {Alignment, Button, Checkbox, Classes, Popover, Position, Text} from "@blueprintjs/core";
import {DateRangePicker} from "@blueprintjs/datetime";
import React, {Component} from "react";
import Moment from 'moment';

const windowWidth = window.document.body.clientWidth;

const filterBoxViewWidth = 700;
const FilterBox = {
    width: "10%",
    minWidth: 200,
    height: "100%",
    position: 'fixed',
    display: 'block',
    overflow: 'auto',
    flex: 1,
    zIndex: 8,
    backgroundColor: 'white',
}

const FilterBackground = {
    backgroundColor: 'rgba(174, 202, 153, 0.3)',
    width: "10%",
    minWidth: 200,
    height: "100%",
}

const Value = {
    display: 'inline-block',
    width: '100%',
    paddingLeft: '5%'
}

function withinRange(firstRange, isInclosedIn) {
    return ((isInclosedIn[0] >= firstRange[0] && isInclosedIn[1] <= firstRange[1]) || (isInclosedIn[0] >= firstRange[0] && firstRange[1] == new Date()));
}

function placeWithin(firstRange, toInclose) {
    if (firstRange[0] > toInclose[0]) {
        firstRange[0] = toInclose[0];
    }
    if (firstRange[1] < toInclose[1]) {
        firstRange[1] = toInclose[1];
    }
    if (!withinRange(firstRange, toInclose)) {
        alert("Error this should not occur.");
    }
    return firstRange;
}

const firstYearDateRange = [new Date(2017, 9, 8), new Date(2018, 8, 8)];
const beforeUniDateRange = [new Date(2014, 9, 1), new Date(2017, 9, 1)];

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = props.initialState
    }

    params = new URLSearchParams()

    updateUrl(value, param) {
        if (param === 'date-range') {
            this.params.set('date-from', Moment(value[0]).format('YYYY-MM-DD'))
            this.params.set('date-to', Moment(value[1]).format('YYYY-MM-DD'))
        } else {
            if (value) {
                this.params.set(param, false)
            } else {
                this.params.delete(param)
            }
        }
        window.history.replaceState({urlPath: '/coding-projects'}, '', '/coding-projects?' + this.params)
        this.props.updateState(param, value)
    }

    render() {
        return <div>
            {(windowWidth < filterBoxViewWidth) &&
            <div>
                <button style={{
                    top: 160,
                    width: 50,
                    height: 100,
                    position: 'fixed',
                    left: (this.state.filterBoxVisible) ? 200 : 0,
                    zIndex: 7,
                    opacity: 0
                }} onClick={() => this.setState(prevState => ({filterBoxVisible: !prevState.filterBoxVisible}))}/>
                <img
                    style={{
                        top: 160,
                        width: 50,
                        height: 100,
                        position: 'fixed',
                        left: (this.state.filterBoxVisible) ? 200 : 0,
                        zIndex: 5,
                    }}
                    src={require('../resources/Button.png')}
                    accessibilityLabel="Button to open search bar"
                    accessible
                />
            </div>
            }
            {(windowWidth >= filterBoxViewWidth || this.state.filterBoxVisible) &&
            <div style={FilterBox}>
                <div style={FilterBackground}>
                    <Text style={Value}>Date: </Text>
                    <Popover style={Value}
                             content={
                                 <DateRangePicker
                                     value={this.state.dateRange}
                                     className={Classes.ELEVATION_1}
                                     onChange={(dateRange) => {
                                         if (dateRange[0] > dateRange[1]) {
                                             // Assures bigger date is always in [1].
                                             var bigDate = dateRange[0];
                                             dateRange[0] = dateRange[1];
                                             dateRange[1] = bigDate;
                                             if (dateRange[1] < dateRange[0]) {
                                                 alert("Logic error, end date is bigger then start date.");
                                             }
                                         }
                                         this.setState({dateRange});
                                         this.setState(prevState => ({FirstYear: withinRange(dateRange, firstYearDateRange)}))
                                         this.setState(prevState => ({PreUni: withinRange(dateRange, beforeUniDateRange)}))
                                         this.updateUrl(dateRange, 'date-range')
                                     }}
                                     styles={{zIndex: 9999}}
                                 />
                             }
                             target={<Button text="Select Date"/>}
                             align={Alignment.CENTER}
                             position={Position.RIGHT}
                    />
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.FirstYear} label="First Year"
                                  onChange={() => {
                                      this.setState(prevState => ({FirstYear: !prevState.FirstYear}));
                                      if (!this.state.FirstYear) {
                                          this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, firstYearDateRange)}));
                                      } else {
                                          if (this.state.PreUni) {
                                              this.setState(prevState => ({dateRange: [beforeUniDateRange[0], beforeUniDateRange[1]]}));
                                          } else {
                                              this.setState(prevState => ({dateRange: [firstYearDateRange[1], new Date()]}));
                                          }
                                      }
                                      this.updateUrl(this.state.FirstYear, "first-year")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.PreUni} label="Before University"
                                  onChange={() => {
                                      this.setState(prevState => ({PreUni: !prevState.PreUni}));
                                      if (!this.state.PreUni) {
                                          this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, beforeUniDateRange)}));
                                      } else {
                                          if (this.state.FirstYear) {
                                              this.setState(prevState => ({dateRange: [firstYearDateRange[0], new Date()]}));
                                          } else {
                                              this.setState(prevState => ({dateRange: [new Date(), new Date()]}));
                                          }
                                      }
                                      this.updateUrl(this.state.PreUni, "pre-uni")
                                  }}/>
                    </div>
                    <Text style={Value}>Language:</Text>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.Java} label="Java"
                                  onChange={() => {
                                      this.setState(prevState => ({Java: !prevState.Java}))
                                      this.updateUrl(this.state.Java, "java")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.C} label="C"
                                  onChange={() => {
                                      this.setState(prevState => ({C: !prevState.C}))
                                      this.updateUrl(this.state.C, "c")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.Web} label="Web Technologies"
                                  onChange={() => {
                                      this.setState(prevState => ({Web: !prevState.Web}))
                                      this.updateUrl(this.state.Web, "web")
                                  }}/>
                    </div>
                    <Text style={Value}>Topic:</Text>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.NN} label="Neural Networks"
                                  onChange={() => {
                                      this.setState(prevState => ({NN: !prevState.NN}))
                                      this.updateUrl(this.state.NN, "nn")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.AI} label="AI"
                                  onChange={() => {
                                      this.setState(prevState => ({AI: !prevState.AI}))
                                      this.updateUrl(this.state.AI, "ai")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.Simulation} label="Simulation"
                                  onChange={() => {
                                      this.setState(prevState => ({Simulation: !prevState.Simulation}))
                                      this.updateUrl(this.state.Simulation, "simulation")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.Graphics} label="Graphics"
                                  onChange={() => {
                                      this.setState(prevState => ({Graphics: !prevState.Graphics}))
                                      this.updateUrl(this.state.Graphics, "graphics")
                                  }}/>
                    </div>
                    <div style={Value}>
                        <Checkbox style={{float: 'left'}} checked={this.state.OS} label="Operating Systems"
                                  onChange={() => {
                                      this.setState(prevState => ({OS: !prevState.OS}))
                                      this.updateUrl(this.state.OS, "os")
                                  }}/>
                    </div>
                </div>
            </div>
            }
        </div>
    }
}
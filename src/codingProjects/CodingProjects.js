import React, {Component} from 'react';
import {
    Code,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Button,
    Text,
    Blockquote
} from '@blueprintjs/core';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './CodingProjects.css';
import {checkStatesNNWP, NNWebsiteProject} from './NNWebsiteProject';
import {checkStatesPS, ProjectileShooter} from './ProjectileShooter';
import {checkStatesSE, StarExplorer} from './StarExplorer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/styles/hljs';
import {SearchBar} from './search-bar/SearchBar'

const filterBoxViewWidth = 700;

const windowWidth = window.document.body.clientWidth;

const output = {
    height: 'auto',
    width: ((windowWidth <= 600) ? "100%" : "40%")
}
const structure = {
    height: 'auto',
    width: ((windowWidth <= 600) ? "100%" : "40%")
}
const code = {
    width: (windowWidth >= filterBoxViewWidth) ? windowWidth - 200 : "100%",
    marginLeft: (windowWidth >= filterBoxViewWidth) ? 200 : 0,
    display: 'block',
    padding: '1%'
};

const firstYearDateRange = [new Date(2017, 9, 8), new Date(2018, 8, 8)];
const beforeUniDateRange = [new Date(2014, 9, 1), new Date(2017, 9, 1)];

// Takes in a json topic file and returns true if it matches this state
function checkStates(state, data) {
    const date = new Date(data.date.year, data.date.month, data.date.day);
    console.log(new RegExp(state.filter))

    return (
        (state.state.Java || !data.language.java) &&
        (state.state.C || !data.language.c) &&
        (state.state.Web || !data.language.web) &&
        (state.state.NN || !data.topic.nn) &&
        (state.state.AI || !data.topic.ai) &&
        (state.state.Simulation || !data.topic.simulation) &&
        (state.state.Graphics || !data.topic.graphics) &&
        (state.state.OS || !data.topic.os) &&
        (state.state.dateRange[0] <= date &&
            state.state.dateRange[1] >= date) &&
        new RegExp(state.filter).test(data.name));
}

const data = [require("./projects/nncexam.json"), require("./projects/epq.json")]

function generateHeader(component) {
    if (component.specialchar != null) {
        return [
            <i class={component.specialchar.front.class} style={component.specialchar.front.style}/>,
            component.body,
            <i class={component.specialchar.back.class} style={component.specialchar.back.style}/>
        ];
    }
    return component.body;
}


// define images here
const images = new Map();

function bodyParser(component) {
    switch (component.type) {
        case "h1" :
            return <H1 style={component.style}>{generateHeader(component)}</H1>;
        case "h2" :
            return <H2 style={component.style}>{generateHeader(component)}</H2>;
        case "h3" :
            return <H3 style={component.style}>{generateHeader(component)}</H3>;
        case "h4" :
            return <H4 style={component.style}>{generateHeader(component)}</H4>;
        case "h5" :
            return <H5 style={component.style}>{generateHeader(component)}</H5>;
        case "h6" :
            return <H6 style={component.style}>{generateHeader(component)}</H6>;
        case "text" :
            return <Text style={component.style}>{component.body}</Text>;
        case "reference" :
            return <a href={component.url} style={component.style}>{bodyParser(component.body)}</a>
        case "u-list" :
            return <ul style={component.style}>{
                component.body.map(function (component) {
                    return bodyParser(component)
                })
            }</ul>
        case "entry" :
            return [<li style={component.style}> {bodyParser(component.label)}</li>,
                component.body.map(function (component) {
                    return bodyParser(component)
                })]
        case "highlighter" :
            return <SyntaxHighlighter language={component.language} style={docco}>
                {component.body}
            </SyntaxHighlighter>
        case "align-left" :
            return <div style={{textAlign: 'left'}}>{
                component.body.map(function (component) {
                    return bodyParser(component)
                })}
            </div>
        case "code" :
            return <Code style={component.style}>{component.body}</Code>
        case "string" :
            return component.body
        case "layered-text" :
            return <Text>{component.body.map(function (component) {
                return bodyParser(component)
            })}</Text>
        case "div":
            return <div style={component.style}>{component.body.map(function (component) {
                return bodyParser(component)
            })}</div>
        case "image":
            const style = (component.style === "output") ? output : ((component.style === "structure") ? structure : null);
            return <img
                style={style}
                src={images.get(component.src)}
                resizeMethod={component.resizeMethod}
                accessibilityLabel={component.accessibilityLabel}
                accessible={component.accessible}
             alt={"image"}/>
        case "quote":
            return <Blockquote>"{component.quote}"</Blockquote>, <small style={{
                width: '70%',
                marginRight: '15%',
                marginTop: '0%',
                color: 'rgb(100, 100, 100)',
                fontSize: '15px',
                textAlign: 'right',
                float: 'right'
            }}> ~{bodyParser(component.author)}</small>

    }
}
images.set("structure", require("./resources/structure.png"))
images.set("XORNNOutput", require("./resources/XORNNOutput.png"))
images.set("Button", require("./resources/Button.png"))

function constructArticle(generator) {
    return data.map(function (data) {
        if (checkStates(generator, data)) {
            return data.body.map(function (component) {
                return bodyParser(component)
            })
        }
    })
}

export class CodingProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Java: true,
            C: true,
            Web: true,
            NN: true,
            AI: true,
            Simulation: true,
            Graphics: true,
            OS: true,
            FirstYear: true,
            PreUni: true,
            dateRange: [beforeUniDateRange[0], new Date()],
            filterBoxVisible: false,
            filter: ""
        }
        let params = new URLSearchParams(window.location.search)

        if (params.has('java')) {
            this.state.Java = false
        }
        if (params.has('c')) {
            this.state.C = false
        }
        if (params.has('web')) {
            this.state.Web = false
        }
        if (params.has('nn')) {
            this.state.NN = false
        }
        if (params.has('ai')) {
            this.state.AI = false
        }
        if (params.has('simulation')) {
            this.state.Simulation = false
        }
        if (params.has('graphics')) {
            this.state.Graphics = false
        }
        if (params.has('os')) {
            this.state.OS = false
        }
        if (params.has('first-year')) {
            this.state.FirstYear = false
        }
        if (params.has('pre-uni')) {
            this.state.PreUni = false
        }
        if (params.has('date-from')) {
            this.state.dateRange[0] = new Date(Date.parse(params.get('date-from')))
        }
        if (params.has('date-to')) {
            this.state.dateRange[1] = new Date(Date.parse(params.get('date-to')))
        }
        if (params.has('filter')) {
            this.state.filter = params.get('filter')
        }
    }

    update = (value, state) => {
        switch (value) {
            case 'java':
                this.setState(({Java: !state}));
                return;
            case 'c':
                this.setState(({C: !state}));
                return;
            case 'web':
                this.setState(({Web: !state}));
                return;
            case 'nn':
                this.setState(({NN: !state}));
                return;
            case 'ai':
                this.setState(({AI: !state}));
                return;
            case 'simulation':
                this.setState(({Simulation: !state}));
                return;
            case 'graphics':
                this.setState(({Graphics: !state}));
                return;
            case 'os':
                this.setState(({OS: !state}));
                return;
            case 'first-year':
                this.setState(({FirstYear: !state}));
                return;
            case 'pre-uni':
                this.setState(({PreUni: !state}));
                return
            case 'date-range':
                this.setState(({dateRange: [state[0], state[1]]}));
                return
            case 'filter':
                this.setState(({filter: state}));
                return
        }
    };

    render() {
        return (
            <div className="bp3-running-text .modifier">
                <div className="SearchBox">
                    <SearchBar initialState={this.state} updateState={this.update}/>
                </div>
                <div style={code}>
                    {(constructArticle(this))}
                </div>
                <div style={code}>
                    {(checkStatesNNWP(this) && <NNWebsiteProject/>)}
                    {(checkStatesPS(this) && <ProjectileShooter/>)}
                    {(checkStatesSE(this) && <StarExplorer/>)}
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import {Text} from '@blueprintjs/core';

var windowWidth = window.document.body.clientWidth;

function getScalableWidth(min, max, percentage){
    let width = windowWidth * percentage;

    if (width < min){
        return min;
    }
    if (width > max){ 
        return max;
    }
    return width;
}
const bannerStyle = {
    width: ((windowWidth <= 600) ? "100%" : "70%"),
    flex: 1,
    alignItems: 'center',
    flat: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto'
}

const stockStyle = {
    height: 'auto',
    width: getScalableWidth(40, 400, 0.2)
}

const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    float: 'center',
    margin: 10
}

const leftContainerStyle = {
    flex: 1,
    float: 'left',
    margin: 10
}

const rightContainerStyle = {
    flex: 1,
    float: 'right',
    margin: 10
}

export class India extends Component{
    render(){

        return(
            <div class="bp3-running-text .modifier">
                <h1><i class="fas fa-map-signs" style={{color: "#83B98C"}}/>  The St Gregory's Bridge <i class="fas fa-map-marked-alt" style={{color: "#83B98C"}}/></h1>
                <div style={containerStyle}>
                    <img 
                        src={require('../resources/group.jpg')}
                        accessibilityLabel="The team that built the St Gregory's Bridge."
                        accessible
                    />
                </div>
                <p id = "content2p"> 
                    <strong>
                    In the summer of 2016; whilst accounting for limited capital, time and manpower I led a team of mathematicians in designing a 
                    120ft suspension bridge, in a remote location in Goa, India. An iterative process was required to solve many of the project 
                    threatening problems; when our planned method would falter it was imperative we pulled through, returning to the drawing board 
                    we would re-evaluate the predicament and produce an ever more elegant solution. The bridge still stands today, after two monsoon 
                    seasons, it is testimony to our skills of perseverance, patience and ingenuity. The local market is the lifeline of the village, 
                    this bridge reduces the commute from two hours to 20 minutes, as well as connecting families separated by a treacherous river. 
                    </strong>
                </p>
                
                <div style={leftContainerStyle}>
                    <img 
                        style={stockStyle}
                        src={require('../resources/In the Rain.jpg')}
                        accessibilityLabel="Fixing the last of the bridge in monsoon conditions."
                        accessible
                    />
                </div>
                <Text>Experiencing and living in a culture outside my own was an eye-opening experience. It is impossible to describe how that time 
                    has affected me as a person, profoundly shaping my values, outlook and perceptions. Aside from character building, working on 
                    a large-scale project with such a diverse team, developed and tested my problem solving and engineering skills. On a daily basis, 
                    project threatening issues would arise requiring innovative and fast solutions. </Text>
                
                <p>
                    Experiencing and living in a culture outside my own was an eye-opening experience. It is impossible to describe how that time 
                    has affected me as a person, profoundly shaping my values, outlook and perceptions. Aside from character building, working on 
                    a large-scale project with such a diverse team, developed and tested my problem solving and engineering skills. On a daily basis, 
                    project threatening issues would arise requiring innovative and fast solutions. 
                </p>
                <p>
                    Building the bridge during the monsoon season was the source of most issues, however this was the only time available to us as 
                    students. During this season the river is at maximum capacity, the water was treacherous. Falling in would be fatal therefore we 
                    needed to develop a way of safely constructing the bridge. The solution was to build the bridge from the outside, inwards. We 
                    started by placing the pulleys on top of the steel pillars, running the cables along the pulleys. From here we could loosely 
                    fasten the wooden planks onto the bottom cables. As the planks were only loosely  fixed, it allowed us to slide them out onto the 
                    river. Creating a harness by attaching ourselves to the top cable, we could then crawl out onto the planks, tightening them as we 
                    went, once a plank was tightened we could advance to the next. This process was iterated for over 80 individually hand cut planks.
                </p>
                <div style={rightContainerStyle}>
                    <img 
                        style={stockStyle}
                        src={require('../resources/crack.jpg')}
                        resizeMethod="cover"
                        accessibilityLabel="The crack in the cement."
                        accessible
                    />
                </div>
                <p>
                    Whilst in the UK we anticipated that in such wet conditions we would be unable to secure the cement and steel beams ourselves, the 
                    weather would make it impossible for the cement to dry. To accommodate this, we hired a local contractor to pour the cement months 
                    before we arrived. This came with its own issues as the original workers ran off with the money! Another contractor was hired; 
                    however it was too late and the cement was unable to set properly, the result of this was that midway through the project the 
                    cement holding the steel beams began to crack. The steel beams would not be strong enough on their own (once the bridge was 
                    finished, all pressure on the front supports would be directed downwards). If the cement had thoroughly set, the foundations would 
                    have been strong enough to support the bridge during construction however, as this was not the case, we had to rethink the whole 
                    development of the bridge. We began by reinforcing the front pillars with the excess cable we had, fixing them to the back ones. 
                    In conjunction with this, across the bridge, we connected the top and bottom cables, forcing the pressure downwards on the supports.
                </p>
                <div style={containerStyle}>
                    <img 
                        style={bannerStyle}
                        src={require('../resources/locals.jpg')}
                        resizeMethod="cover"
                        accessibilityLabel="A village local walking across the bridge for the first time."
                        accessible
                    />
                </div>
                <p>
                    The reaction of the locals during the opening ceremony of the bridge made all the time, effort and stress worthwhile. To this date, the genuine
                    smile and pleasure on the faces of the locals as they walked across the bridge for the first time is the most memorable experience I have ever had.
                </p>
            </div>
        );
    }
}
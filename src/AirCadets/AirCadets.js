import React, { Component } from 'react';

var windowWidth = window.document.body.clientWidth;
const banner= {
	width: ((windowWidth <= 600) ? "100%" : "70%"),
	height: 'auto'
}
const container= {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: 10
}

export class AirCadets extends Component{
    render(){
        return (
            <div class="bp3-running-text .modifier">
                <div style={{padding: "2%"}}>
                <h1 text-align="center"><i class="fas fa-plane-departure" style={{opacity: 0.3, color: "#83B98C"}}/>  Air Cadets  <i class="fas fa-plane-arrival" style={{color: "#DEDA9f", opacity: 0.7}}/></h1>
			<p> <strong> Over the last 6 years, the Air Training Corps has played an integral part in my life. After being in the Air Cadets for just a year, 
				joining in 2012, I was awarded the <i>Most Promising Cadet</i> award, this led to me being promoted to the rank of Corporal. Being thrown into 
				the deep end as senior cadets began to age out, I soon found myself as 'Cadet In Charge'(IC) of the squadron. This necessitated learning extremely 
				quickly how to organise and lead a team of cadets, with the squadron having tripled in size. In the following years, whilst continuing 
				this high level of personal development, I rose through the ranks achieving the highest rank (for an under 18 year old) of Flight Sergeant by the age of 15.
				</strong>
			</p>
            <div style={container}>
                <img 
                    style={banner}
                    src={require('../resources/Cadets.jpg')}
                    resizeMethod="cover"
                    accessibilityLabel="The cadet squadron I am apart of"
                    accessible
                />
            </div>
			<p>
				In October 2015, I had the honour of being selected as the wreath bearer for the Air Training Corps in front of thousands of people, during the biggest
				parade for the Royal Navy Cadets (Trafalgar Day Parade in Trafalgar Square, London). In the preceding days, we stayed at the Royal Naval Base on Whale 
				Island (Portsmouth), where we meticulously rehearsed and practiced our drill in preparation. After the parade on Trafalgar Square, we marched passed Buckingham 
				Palace then had lunch at Wellington Barracks; this required me to perform and keep a regimental approach, under high pressure circumstances, where any 
				mistake would have been visible to all.
			</p>
			<p>
				During my time within the ATC I had some of the most amazing experiences. One such experience was when I spent 10 days on RAF Akrotiri in Cyprus. 
				"It is used as a forward mounting base for overseas operations in the Middle East and for fast jet training". Taking a senior leadership role in 
				a foreign environment helped to develop my social and leadership skills. Spending such a large amount of time with the same people, presented itself 
				with a number of disagreements which tested my powers of diplomacy. Maintaining a high level of discipline in such a critical environment was a key
				success factor.
			</p>
			<p>
				The task of being cadet IC stretches my management, organisation and problem-solving skills; having to manage my leadership team to ensure
				that each night runs smoothly, as well as providing value to all cadets involved. An example of when I added value was through teaching lessons; within
				the air cadets there exists a Curriculum of material to be studied to give cadets practical engineering knowledge, military skills and insight into the
				history of the Royal Air Force. As well as my leadership responsibilities, I personally managed the teaching of the new cadets in basic principles of flight, and the
				advanced cadets in advanced principles of rocketry and flight. It was an amazing experience sharing my knowledge with the cadets, helping to inspire the 
				future generation of engineers.
			</p>	
			<p>
				In 2015 I spent a month in Borneo travelling, where we alternated leadership roles. Initially I attempted to implement my militaristic leadership
				skills into this scenario, however It quickly became apparent that in a nonmilitary setting, this strategy would not be appropriate. I then spent the next few weeks
				(until the leadership role fell upon me again) developing a new strategy better suited to a less autocratic and more collaborative environment. 
				Implementing this into my skillset helped to diversify my leadership style, allowing me to quickly switch between different approaches where appropriate. 
			</p>
			</div>
            </div>
        )
    }
}

import * as React from 'react';
import {H4, H6, Blockquote, H2} from '@blueprintjs/core';

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
                <H2><i class="fas fa-brain" style={{color: 'orange'}}/> Website Project - Artificial Neural Network <i class="fas fa-brain" style={{color: 'blue'}}/></H2>
                <Blockquote> “One of the best presentations that I remember... Fantastic presentation, clear and coherent, very lively illustration of how the gradient descent works using a tablecloth and a small billiard ball, great team work"
                </Blockquote>
                <small style={{width: '70%', marginRight: '15%', marginTop: '0%',  color: 'rgb(100, 100, 100)',  fontSize: '15px',	textAlign: 'right',  float: 'right'}}> <a href="https://www.doc.ic.ac.uk/~ae/">~Abbas Edalat</a></small>
                <H4>Project Outline</H4>
                <p> Over a 12-week period during the Second Term of University, we were tasked to Research and develop a website on a Computing Topic. As a team of four we were tasked with developing a website on <b>Feed-Forward Neural Networks and Backpropagation</b> which would include research into the theory, mathematics and history of this type of ANN. The website would be used to accompany a presentation that we would present to First Year Computing Students (our target audience) as well as several professors.  </p>
                <p> I took the role of Team Lead for this Project which brought about a number of unique and varied challenges for me to overcome. </p>
                <p> As a team we were rewarded with Prizes for “Second Best Presentation” and “Best Neural Network project” out of 37 groups, we achieved a mark of 54/55. </p>
                <H4> Team Management </H4>
                <p> I have been lucky to have had many opportunities throughout my life to take an active leadership role over a diverse group from multiple backgrounds, utilising multiple different leadership techniques; an authoritarian leadership style through my role as Squadron In Charge at my local Air Cadet squadron for the last 5 years, as well as a very different, very democratic, leadership style from my role on the St Gregory’s Bridge as well as my time spent in Borneo in 2015. However, this was my first time leading a group of likeminded students, only one of which I had met prior, in an academic, computational, project which was bound to present itself with new struggles and opportunities to gain experience. </p>
                <p> As this project would involve a careful balancing act between all the different work and courses we were undertaking alongside, I decided to take a very relaxed strategy to leadership. I believed the key to success in this project would be inspiring passion within the group such that everyone would feel compelled and enjoy working on this project. I believe I was successful in that, and the <b>environment we created</b> within the group was open and passionate, each team member wanted to work hard on the ideas they were able to contribute towards the project. During our weekly meetings, team-members would want to talk about what they had been working on that week, wanting to expand upon and delve into new sides of the project. By spending the time discussing the work being complete, we were able to help each other when unforeseen circumstances would arise as well as offer each other pointers and new ideas. As the group leader it was important however to make sure the team stayed on track, here I feel the more authoritarian leadership skills I had came in use, especially as deadlines neared, ensuring each team-member was working efficiently and effectively. </p>
                <p> Unlike many projects, I believe having a dedicated team leader to inspire and focus the team was extremly important. Although we may not have had the most academic students, by utilising our resources to the maximum efficiency we were able to complete the project with lots of time to spare to an exceptional quality. Furthermore, although conflicts did arise, having lots of experience in conflict management, I was able to deal with these promptly and effectively such that we were not wasting time or energy. </p>
                <H4> Website Project </H4>
                <p> The purpose of the website was to develop an educational webpage on Feed-Forward Neural Networks and Backpropagation. We believed it was important to do some preliminary research into what other educational websites on this topic offer before we began. We found a severe lack of interactive, graphic explanations; most websites were blocks of texts, which students would have gotten bored or frustrated looking at, as well as not appealing to students who learn better through visual/practical mediums. We placed this as a top priority for our webpage. </p>
                <p> Once we had researched and each wrapped our head around how these networks work and are structured we started discussing methodologies for how we could make the webpage more interactive. As proof that we truly understood how these networks worked, we implemented our own version in Python that was designed to train on the MNEST data set, thus providing a visual medium to explain how our network trains. We also decided to show how the network trained by stopping the network at different epoch numbers and colour coding the confidence level appropriately (see screenshot).</p>
                <p> We emphasised graphics as being a huge part of our websites, we made all our graphics ourselves which meant they were able to seemingly integrate themselves as well as being useful and specialised for the exact purposes we needed them for.</p> 
                <p> Our focus on a learning <b>experience</b> was noted by our project supervisor when he said <q>“Fantastic presentation, clear and coherent, very lively illustration of how the gradient descent works using a tablecloth and a small billiard ball, great team work.” </q> ~Abbas Edalat </p>
                <H6><a href="www.doc.ic.ac.uk/~sb3117">View Online</a></H6>
            </div>
        );
    }
}
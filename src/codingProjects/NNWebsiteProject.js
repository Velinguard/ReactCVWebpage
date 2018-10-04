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
                <p>I have been lucky, considering my age, to have been given the opportunity on a number of occasions to take a  leadership role over a diverse group, however, this was my first time leading a group of likeminded students (only one of which I had met previously, in an academic, computational, project). This presented itself with new challenges and opportunities to gain experience.</p>
                <p>As this project would involve a careful balancing act between all the different work and courses we were undertaking alongside, I decided to take a very relaxed strategy, I believed the key to success would be inspiring passion within the group such that everyone would feel enthusiastic and enjoy working together. I believe that the <s>environment we created</s> within the group was open and passionate, each team member wanted to work hard on the ideas they were able to contribute towards the project. During our weekly meetings, team-members would be eager to talk about what they had been working on that week, wanting to expand upon and delve into new sides of the project. By spending the time discussing the work, we were able to help each other when unforeseen circumstances arose as well as suggesting new ideas. As the group leader it was important however to make sure the team stayed on track, especially as deadlines approached.</p>
                <p>I am proud to say that by utilising our resources to the maximum effect we were able to complete the project, with time to spare, to a very high quality.</p>               
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
import * as React from 'react';
import {Text, H2, H5, H4} from '@blueprintjs/core';
import 'video-react/dist/video-react.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function checkStatesSE(states){
    return (states.state.Java && 
        (states.state.Simulation ||
            states.state.Graphics) &&
        (states.state.dateRange[0] <= date && 
            states.state.dateRange[1] >= date));
}

const date = new Date(2017, 4, 1);

export class StarExplorer extends React.PureComponent{
    render(){
        return (
            <div class="bp3-running-text .modifier">
                <H2><i class="fas fa-atom" style={{color: 'yellow'}}></i> Star Explorer <i class="fas fa-atom" style={{color: 'yellow'}}></i></H2>
                <Text> An object orientated (OO) approach to the problem of stellar observation designed for amateur astronomers.</Text>
				<H5 style={{padding:'0.4', marginTop:'0'}}><a href="https://github.com/Velinguard/Star-Explorer-Pre-Studies-Java"><p> Git Repository</p></a></H5>
				<H4 style={{padding:'0', marginTop:'0'}}>Project Details</H4>
				<p>
                    The program inputs an image of an absorption spectra from a star (note this would work with any absorption spectra, it 
                    does not have to be from a star), this image is turned into an array of Pixel objects; these objects hold only the relevant 
                    information, such as the position of the pixel on the image and whether the pixel is black and white. This array is then 
                    compared with similar arrays that represent inputted emission spectrums for different elements; if there is a match, then 
                    the name of the element is returned as well as the accuracy of the result. 
                </p>
                <H4>Code Example</H4>
                <Text>
                    The following code contains the algorithm for obtaining the position of the spectral lines from an inputted image:
                </Text>
                <div style={{textAlign:'left'}}>
                    <SyntaxHighlighter language='java'>
    {'for (int i = 0; i <= height - 1; i++){\n  //Goes across the image, for example when x = 0, we are working on the left most pixel.\n      for (int x = 0; x <= width - 1; x++) {\n		pixels[x][i] = new Pixel(img.getRGB(x, i), accuracy);\n\n	//If it is black then add to a count to determine how many absorption lines there are, the last means that\n        //the same absorption line is not counted twice.\n        if(pixels[x][i].getBlack() && !last){\n            step++;\n            last = true;\n        } else {\n            last = false;\n        }\n    }\n    //If we have already found the best degree of accuracy or if this is the right degree.\n    if (step == shouldBe || stop){\n        stop = true;\n    } else if (shouldBe == 0){\n        stop = true;\n        array.add(setPixels(70));\n        //This allows for me to make a simplified version for the general user, with an average accuracy.\n    } else {\n        //If the number it should be is less than the number it is, it should go back up.\n        if (step < shouldBe || goneTo){\n            goneTo = true;\n            //If the number it should be is more than the number it is, we go back one and use that as the closest\n            //that we will get.\n            if (step > shouldBe){\n                stop = true;\n                array.add(setPixels(accuracy - 1)); //worst come situation.\n            }\n            array.add(setPixels(accuracy + 2));\n        } else {\n            array.add(setPixels(accuracy - 10));\n        }\n    }\n}'}
                    </SyntaxHighlighter>
                </div>
                <Text>
                    This project was my third large Computer Science project, it served as an accumulation of all the knowledge I 
                    learned from studying Computer Science at A-Level for the past year as well as spending the prior year self-teaching myself Java. 
                    Initially starting off with this project I had no knowledge of OO techniques, I had read about them but I had not completely 
                    grasped the concept; it was halfway through this project after I had created the first fully functioning procedural prototype 
                    that OO finally clicked. I then went back and re-coded the whole project in an OO manor, teaching myself how classes, inheritance
                    and encapsulation worked, incorporating all these techniques into the finished project. Although there were many set-backs, 
                    I still managed to complete the project way before the May 2017 deadline to a standard that with very broad guidelines and 
                    extremely minimal help I was, and my clients were, happy with. 
                </Text>
                <div style={{width: '70%', height: '70%', float:'centre'}}>
				</div>
                <Text> 
                    What is unseen in the above demo is that when the <i>'Find file'</i> button is pressed, a file explorer pops up that allows the
                    image to be selected.
                </Text>
                <Text> 
                    In the above demo, the second image to be analysed is the same as the last image, however sodium has not been "seen" by the program yet, 
                    once the element is added, then the software is able to analyse the element sodium.
                </Text>
            </div>
        );
    }
}
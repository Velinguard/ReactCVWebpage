import * as React from 'react';
import {Code, Text, H2, H5, H3} from '@blueprintjs/core';
import 'video-react/dist/video-react.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export function checkStatesNNCE(states){
    return (states.state.C && 
        states.state.NN &&
        (states.state.dateRange[0] <= date && 
            states.state.dateRange[1] >= date));
}

var windowWidth = window.document.body.clientWidth; 

function getScalableHeight(min, max, percentage, aspectRatio){
    return getScalableWidth(min, max, percentage) * aspectRatio;
}

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

const XOR = {
	width: '70%',
	height: '70%',
	float: 'center'
}
const container= {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: 10
}
const output= {
	height: getScalableHeight(40, 400, 0.2, 1.5),
	width: getScalableWidth(40, 400, 0.2)
}
const structure= {
	height: getScalableHeight(40, 400, 0.2, 0.72),
	width: getScalableWidth(40, 400, 0.2)
}
const leftContainer= {
	flex: 1,
	float: 'left',
	margin: 10
}
const alignLeft= {
	textAlign:'left'
}

const date = new Date(2018, 6, 23);

export class NNCExamProject extends React.PureComponent{
    render(){		
        return (
            <div class="bp3-running-text .modifier">
				<H2> <i class="fas fa-brain" style={{color: 'orange'}}/> Feed-Forward Artificial Neural Network <i class="fas fa-brain" style={{color: 'blue'}}/></H2>
				<Text> A Feed-Forward Artificial Neural Network entirely in C, using backpropagation algorithm to train.
				</Text>
                <Text> Utilising the knowledge and techniques I learned when researching Feed-Forward Networks and Backpropagation for my teams website project I was able to develop a ANN model entirely in C which was able to learn the XOR problem achieving over 99% accuracy.</Text>
				<H5 style={{padding:'0.4', marginTop:'0'}}><a href="https://github.com/Velinguard/C-Artificial-Neural-Network"><p> Git Repository</p></a></H5>
				<H3 style={{padding:'0', marginTop:'0'}}>Code Analysis</H3>
				<Text>
					Before starting this project I needed to decompose the different tasks and then decide upon the structs and function definitions for each of these.
				</Text>
				<div style={alignLeft}>
					<H5>Structs</H5>
					<ul>
						<li><a href="https://github.com/Velinguard/C-Artificial-Neural-Network/blob/master/includes/layer.h"><Code>layer_t</Code></a></li>
						<Text>This struct will act like a graph and point to the next and previous layers, as well as storing information about each nodes biase, output, delta and incoming weights, also keeping track of number of input and output nodes.</Text>
						<SyntaxHighlighter language='c' style={docco}>
							{
								'typedef struct layer {\n	/* Number of inputs and outputs (neurons).*/\n	int num_inputs, num_outputs;\n	/* Output of EACH neuron. */\n	double *outputs;\n	/* Pointers to previous and next layer if any. */\n	struct layer *prev;\n	struct layer *next;\n	/* Incoming weights of EACH neuron. */\n	double **weights;\n	/* Biases of EACH neuron. */\n	double *biases;\n	/* Delta errors of EACH neuron. */\n	double *deltas;\n} layer_t;'
							}
						</SyntaxHighlighter>
						<li><a href="https://github.com/Velinguard/C-Artificial-Neural-Network/blob/master/includes/ann.h"><Code>ann_t</Code></a></li>
						<Text>This struct will store the input and output layer, keeping track of the neural network.</Text>
						<SyntaxHighlighter language='c' style={docco}>
							{
								'typedef struct ann {\n	/* The head and tail of layers doubly linked list. */\n	layer_t *input_layer;\n	layer_t *output_layer;\n} ann_t;'
							}
						</SyntaxHighlighter>
					</ul>
					<H5>Problem Decomposition</H5>	
					<ul>
						<li>Feed-Forward Network</li>
						<ul>
							<li>Initialise layer.</li>
							<SyntaxHighlighter language='c' style={docco}>
								{'// Initialises layer by: allocating memory, initialising biases and deltas and assigning a random value to each weight.\n// PRE: layer != null\n// POST: r -> V node : layers (Vpn : prevLayer(0 <= node->weight[pn] <= 1) & node->biase == node->delta == 0)  \nbool layer_init(layer_t *layer, int num_outputs, layer_t *prev){}'}
							</SyntaxHighlighter>
							<li>Compute layer outputs.</li>
							<Text>I needed to decide on an activation function, I decided to go for the sigmoid function.</Text>
							<SyntaxHighlighter language='c' style={docco}>
								{'// Computes sigmoid function for a given x value\n//PRE: 1 + exp(-x) != 0\n//POST: r = 1/(1 + exp(-x))\ndouble sigmoid(double x){}'}
							</SyntaxHighlighter>
							<SyntaxHighlighter language='c' style={docco}>
								{'// Computes the output for this layer.\n// PRE: layer->prev == NULL -> prevLayer == InputLayer\n// POST: Vnode : layer (node->output = sum (V pn : prevLayer(pn->output * node->weight[pn])))\nvoid layer_compute_outputs(layer_t const *layer){}\n'}
							</SyntaxHighlighter>
							<li>Link layers together.</li>
							<Text>To put all these layers together I decided to use the struct <Code>ann_t</Code> and then manipulate the <Code>layer_compute_outputs</Code> to be a recursive function that would first compute the first hidden layer and then upwards until each layer was calculated. I needed some helper functions to start this process on a <Code>ann_t</Code> struct.</Text>
							<SyntaxHighlighter language='c' style={docco}>
								{
									'// Forward run of given ann with inputs\n// PRE: ann != NULL && inputNodes != NULL && ann->inputLayer != NULL && ann->outputLayer != NULL && size(inputNodes) == size(ann->inputLayer->outputs)\n// POST: ann->outputLayer == the NN prediction output for the given input.\nvoid ann_predict(ann_t const *ann, double const *inputs){}'
								}
							</SyntaxHighlighter>
						</ul>
						<li>Backpropagation</li>
						<ul>
							<li>Compute layer deltas.</li>
							<SyntaxHighlighter language='c' style={docco}>
								{
									'//Computes the delta errors for this layer.\n//PRE: layer->next == NULL -> layer->next == OutputLayer\n//POST: V node : layer (node->delta = sigmoid(node->output) * sum(V nn : nextLayer (nn->weight[node] * nn->delta)))\nvoid layer_compute_deltas(layer_t const *layer){} \n'
								}
							</SyntaxHighlighter>
							<li>Update layer.</li>
							<SyntaxHighlighter language='c' style={docco}>
								{
									'// Updates weights and biases according to the delta errors given learning rate.\n// PRE: prevLayer == NULL -> prevLayer == inputLayer\n// POST: V node : layer (node->biase = num_input * learningRate * node->delta && V pn : prevLayer(node->weight[pn] = \n// learningRate * pn->output * node->delta))\nvoid layer_update(layer_t const *layer, double l_rate){}'
								}
							</SyntaxHighlighter>
							<li>Iterate proccess for all layers.</li>
							<Text>Sticking with the recursive theme I decied to (once initialy completed) convert <Code>layer_compute_deltas</Code> and <Code>layer_update</Code> functions to recursively traverse each layer, <Code>layer_compute_deltas</Code> would start with the last hidden layer and <Code>layer_update</Code> would start with the first.</Text>
						</ul>
					</ul>
				</div>
				<H3>XOR Problem</H3>
				<Text>A crucial test for any Neural Network is the XOR problem, as discussed <a href="https://www.doc.ic.ac.uk/~sb3117/#content2">here</a> (see NN website project), being a relatively simple problem that cannot be solved using a linear Neural Network.</Text>
				<H5>Solution</H5>
				<Text>To test this ANN API I had created I would train it on the XOR problem. I would use the structure of: 2 input nodes -> 1 hidden layer with two nodes -> 1 output node:</Text>
				<div style={container}>
					<img 
                        style={structure}
                        src={require('./resources/structure.png')}
                        resizeMethod="cover"
                        accessibilityLabel="The structure of 2 -> 2 -> 1 for the NN."
                        accessible
                    />
				</div>
				<Text>I would combine this with using: </Text>
				<div>
					<ul>
						<li>Batch size: 1</li>
						<li>Epoch size: 25,000</li>
					</ul>
				</div>
				<Text>This means it will train the data for one 'training session' (Batch size) and each 'trainint session' will train the data 25,000 times (it will call <Code>ann_train</Code> 25,000 times). This should easily be enough to see if the NN can learn the XOR function.</Text>				
				<H5>Packaging</H5>
				<Text>An important part of this project involves how it will be packaged, as I am creating a library for a C Neural Network that can be used by many individuals for any tractable Feed-Forward Neural Network project. I would therefore need to be careful in the structure and documentation of the project, as well as implementing a make file that would allow users to quickly implement and test there own Neural Networks.</Text>
				<H5>Analysis</H5>
				<Text>Running through the <a href="https://github.com/Velinguard/C-Artificial-Neural-Network/blob/master/testsuite/train.c"><Code>train.c</Code></a> file runs through the training of the Neural Network, and outputs the confidence of the network after training is complete:</Text>
				<div style={container}>
					<img 
                        style={output}
                        src={require('./resources/XORNNOutput.png')}
                        resizeMethod="cover"
                        accessibilityLabel="The output showing the state and confidence of the network after training."
                        accessible
                    />
				</div>
				<Text>As you can see from this the network is able to gain a confidence of over 99% after just 25,000 epochs. Although this is a very simple example of how the Network can be used, it proves it can be used to solve non-linear problems.</Text>
				<Text>I believe this project was a success in combining all the different techniques I learned during my first year studies, from my studies of C to the in-depth resarch conducted during my Computing Topics project. I was able to learn how to work on a proffesional standard C project, from project structure, commenting and documentation, as well as managing header and make files.
				</Text>
            </div>
        );
    }
}
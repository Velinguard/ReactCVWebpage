typedef struct layer {
    /* Number of inputs and outputs (neurons).*/
    int num_inputs, num_outputs;
    /* Output of EACH neuron. */
    double *outputs;
    /* Pointers to previous and next layer if any. */
    struct layer *prev;\n\tstruct layer *next;
    /* Incoming weights of EACH neuron. */
    double **weights;
    /* Biases of EACH neuron. */
    double *biases;
    /* Delta errors of EACH neuron. */
    double *deltas;
} layer_t;

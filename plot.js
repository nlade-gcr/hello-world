var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  type: 'scatter'
};

var data = [trace1];

var layout = {
  title: 'Basic Scatter Plot',
  xaxis: {
    title: 'X Axis',
  },
  yaxis: {
    title: 'Y Axis',
  }
};

Plotly.newPlot('plot', data, layout);

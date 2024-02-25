const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generateOutput', (req, res) => {
  const inputData = req.body.inputdata;
  const monthLabels = generateMonthLabels(inputData);
  const datasets = generateDatasets(inputData, monthLabels);

  const outputData = {
    monthLabels,
    datasets,
  };

  res.json(outputData);
});

function generateMonthLabels(inputData) {
  const monthSet = new Set();

  inputData.forEach((entry) => {
    const date = new Date(entry.date);
    const month = date.getMonth() + 1;
    monthSet.add(month);
  });

  const sortedMonths = Array.from(monthSet).sort((a, b) => a - b);

  const monthLabels = sortedMonths.map((month) => getMonthLabel(month));

  return monthLabels;
}

function getMonthLabel(month) {
  const monthLabels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
  return monthLabels[month - 1];
}

function generateDatasets(inputData, monthLabels) {
  const datasets = [];

  const suppliers = {};

  inputData.forEach((entry) => {
    const label = entry.dateDetails.supplier.name;
    if (!suppliers[label]) {
      suppliers[label] = {
        name: label,
        totalReach: 0,
        monthReach: Array(monthLabels.length).fill(0),
      };
    }

    suppliers[label].totalReach += entry.reach;

    const date = new Date(entry.date);
    const month = date.getMonth() + 1;
    const monthIndex = monthLabels.findIndex((item) => item === getMonthLabel(month));
    suppliers[label].monthReach[monthIndex] += entry.reach;
  });

  for (const [key, value] of Object.entries(suppliers)) {
    const dataset = {
      totalReach: {
        name: value.name,
        totalReach: value.totalReach,
      },
      label: value.name,
      monthReach: value.monthReach.map((reach, index) => ({ [monthLabels[index]]: reach })),
    };

    datasets.push(dataset);
  }

  return datasets;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const { formatDate, getSum, writeFile, createMapping } = require('./utils');

const data = require('./data')(1e3);
writeFile('data.json', data).then(() => {
  // eslint-disable-next-line no-console
  console.log('Check input data in data.json file');
}).catch(err => {
  // eslint-disable-next-line no-console
  console.log(`Failed to write file: ${err}`);
});


const createTimeline = (data, days) => {
  const map = createMapping(data);
  const now = new Date().valueOf();

  const result = {};
  for (let i = days - 1; i >= 0; i--) {
    const timestamp = now - (i * 60 * 60 * 24 * 1000);
    const date = formatDate(new Date(timestamp));

    const values = map.get(date) || [];
    const sum = getSum(values);
    const count = values.length;
    const average = sum / count || 0;

    result[date] = {
      sum,
      count,
      average
    };
  }

  return result;
};

const result = createTimeline(data, 30);

writeFile('result.json', result).then(() => {
  // eslint-disable-next-line no-console
  console.log('Check output data in result.json file');
}).catch(err => {
  // eslint-disable-next-line no-console
  console.log(`Failed to write file: ${err}`);
});
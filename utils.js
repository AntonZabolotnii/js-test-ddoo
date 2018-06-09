const fs = require('fs');

/**
 * Format date to something like '2018-01-31'
 *
 * @param {Date} date
 * @return {String}
 */
function formatDate(date) {
  return date.toISOString().substring(0, 10);
}

/**
 * Get the sum of array elements
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */
function getSum(arr) {
  return arr.reduce((total, current) => {return total += current;}, 0);
}

/**
 * Write file with data
 *
 * @param {String} filename
 * @param {Object} data
 * @return {Promise}
 */
function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

/**
 * Create a map structure where key is a date and value is an array
 *
 * @param {Array<Object>} data
 * @example
 * createMapping([{}, ..., {}])
 *
 * '2018-07-22' -> [9,5,8,5,10,4]
 * ...
 * '2018-09-09' -> [10,10,6]
 *
 * @return {Map<String, Array>}
 */
function createMapping(data) {
  const map = new Map();

  data.forEach(item => {
    const date = formatDate(new Date(item.date));
    const value = map.get(date);

    if (Array.isArray(value)) {
      map.get(date).push(item.value);
    } else {
      map.set(date, [item.value]);
    }
  });

  return map;
}

module.exports = {
  formatDate,
  getSum,
  writeFile,
  createMapping
};